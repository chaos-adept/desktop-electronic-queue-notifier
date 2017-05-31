'use strict';
const electron = require('electron');
const io = electron.remote.require('socket.io-client');
const host = electron.remote.process.argv[2] || 'https://micro-conf.xyz';
const socket = io(host, { rejectUnauthorized: false });

socket.on('connect', function(){
    //document.querySelector('.error-placeholder').innerText = 'connect';
});

socket.on('event', function(data){
    document.querySelector('.error-placeholder').innerText = 'event: ' + data;
});

socket.on('disconnect', function(){
    document.querySelector('.error-placeholder').innerText = 'disconnect';
});

socket.on('reconnecting', function(){
    document.querySelector('.error-placeholder').innerText = 'reconnecting';
});

socket.on('reconnect_error', function(error){
    document.querySelector('.error-placeholder').innerText = 'reconnect_error ' + JSON.stringify(error);
});

socket.on('reconnect_failed', function(){
    document.querySelector('.error-placeholder').innerText = 'reconnect_failed';
});

socket.on('updateTopMostTicket', function (data) {
    const hasTicket = !!data.ticket;
    const el = document.querySelector('.question-placeholder');
    el.classList.toggle('topQuestion', hasTicket);
    el.classList.toggle('hidden', !hasTicket);
    el.innerText = hasTicket && data.ticket.id;
});

socket.on('error', function (data) {
    console.log('error', data);
    document.querySelector('.error-placeholder').innerText = 'error: ' + data;
});
