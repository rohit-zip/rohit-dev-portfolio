module.exports = {
    apps: [
        {
            name: "rohit-portfolio",
            script: "npm",
            interpreter: "none",
            args: "start",
            env: {
                PORT: 1001,
                NODE_ENV: "production"
            }
        }
    ]
};
