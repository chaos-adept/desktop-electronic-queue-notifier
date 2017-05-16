'use strict';
const electron = require('electron');
const io = electron.remote.require('socket.io-client');
const host = electron.remote.process.argv[2] || '62.109.20.84';
const socket = io(`http://${host}`);

socket.on('updateTopMostTicket', function (data) {
    const hasTicket = !!data.ticket;
    const el = document.querySelector('.question-placeholder');
    el.classList.toggle('topQuestion', hasTicket);
    el.classList.toggle('hidden', !hasTicket);
    el.innerText = hasTicket && data.ticket.id;
});

socket.on('error', function (data) {
    console.log('error', data);
});
