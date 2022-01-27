const generateQuestions = data => {
    return `
# ${data.title}
## Table of Conetents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#licenses)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
### ${data.description}
    
## Installation
### ${data.install}
    
## Usage
### ${data.usage}
## License
### ${data.licenses}
## Contributions
### ${data.contributions}
## Tests
### ${data.tests}
## Questions
### (https://github.com/${data.username})
### ${data.email}
## Demo
[![demo]({})]({./video/README-demonstration.webm} "Demo")
[![Alternate Text]({image-url})]({video-url} "Link Title")
`
}

module.exports = generateQuestions;