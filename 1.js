// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hedddddddddddddddddddllo|hi there)');
});

intent('sun', p => {
    p.play('(moon)');
});