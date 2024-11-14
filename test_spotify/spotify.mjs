// Import required modules
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

let accessToken = process.env.ACCESS_TOKEN;
const refreshToken = process.env.REFRESH_TOKEN;

async function refreshAccessToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            })
        });

        if (!response.ok) {
            throw new Error('Failed to refresh access token');
        }

        const data = await response.json();
        accessToken = data.access_token; // Update the global access token variable
        console.log('Access token refreshed successfully');
        return accessToken;
    } catch (error) {
        console.error('Error refreshing access token:', error.message);
        throw error;
    }
}

async function getCurrentlyPlaying() {
    try {
        // Check if access token is expired or missing
        if (!accessToken) {
            throw new Error('Access token not found or expired. Refreshing token...');
        }

        // Fetch currently playing track from Spotify API
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        // Handle non-successful response from Spotify API
        if (!response.ok) {
            const errorData = await response.json();
            // Check if token expired error
            if (response.status === 401 && errorData.error.message === 'The access token expired') {
                console.log('Access token expired. Refreshing token...');
                accessToken = await refreshAccessToken();
                // Retry fetching currently playing after token refresh
                return await getCurrentlyPlaying();
            } else {
                throw new Error(`Failed to fetch currently playing track: ${errorData.error.message}`);
            }
        }

        // Successfully fetch data from Spotify API
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching currently playing track:', error.message);
        throw error;
    }
}

// Example usage of the function
async function main() {
    try {
        const currentlyPlaying = await getCurrentlyPlaying();
        console.log('Currently Playing:', currentlyPlaying); // Log the result here
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call main function to execute example
main();
