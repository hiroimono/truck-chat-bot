// import axios from '../axios';

export function registerNewTrack (trucks) {
    return {
        type: 'REGISTER_NEW_TRACK',
        trucks: trucks,
    };
}
