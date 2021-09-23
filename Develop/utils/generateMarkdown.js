function renderLicenseBadge(License) {
  let licenseType = License;
  if (licenseType === "MIT") {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === "Mozilla Public License 2.0") {
    yourLicense = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (licenseType === "Apache License 2.0") {
    yourLicense = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (licenseType === "GNU GPL v3") {
    yourLicense = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else {
    yourLicense = "";
  }
  return yourLicense;
}

function renderLicenseLink(License) {
  if (License === "None") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

function renderLicenseSection(License) {
  if (License === "None") {
    return "";
  } else {
    return `# License
  This project is license under the  ${License} license.`;
  }
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.License)}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.License)}
* [Test](#test)
* [Contributing](#contributing)
* [Questions](#questions)
# Installation
${data.Installation}
# Usage
​${data.Usage}
${renderLicenseSection(data.License)}
# Test
${data.Test}
# Contributing
​Contributors: ${data.Contributor}
# Questions
If you have any questions about the repo, open an issue or contact [${
    data.UserName
  }](https://github.com/${data.UserName}) directly [${data.Email}](mailto:${
    data.Email
  }).
`;
}

module.exports = generateMarkdown;