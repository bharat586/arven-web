const express = require('express');
const fs = require('fs'); // Files save karne ke liye
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <body style="background:#000; color:#d4af37; text-align:center; font-family:serif; padding-top:100px;">
            <h1>ARVEN</h1>
            <p style="color:#fff;">Enter email to join the waitlist</p>
            <form action="/join" method="POST">
                <input type="email" name="email" required style="padding:10px;">
                <button type="submit" style="padding:10px; background:#d4af37; border:none; cursor:pointer;">SUBMIT</button>
            </form>
        </body>
    `);
});

app.post('/join', (req, res) => {
    const email = req.body.email;
    
    // Ye line email ko "leads.txt" file mein save kar degi
    fs.appendFile('leads.txt', email + '\n', (err) => {
        if (err) throw err;
        console.log('Saved to leads.txt:', email);
        res.send('<h1 style="background:#000; color:#d4af37; height:100vh; text-align:center;">Thank you! Saved.</h1>');
    });
});

app.listen(3000, () => console.log('App is running!'));app.post('/join', (req, res) => {
    const email = req.body.email;
    fs.appendFile('leads.txt', email + '\n', (err) => {
        if (err) throw err;
        console.log('Saved:', email);
        res.send('<h1>Thank you!</h1>');
    });
});

// Purani line ki jagah ye naya code:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ARVEN is live on port ${PORT}`));