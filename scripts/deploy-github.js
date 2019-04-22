const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/flexdinesh/flexdinesh.github.io.git',
        // repo: 'git@github.com:rc1336/roger-campbell-portfolio.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)