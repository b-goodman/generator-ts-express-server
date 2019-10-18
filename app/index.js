/* eslint-disable prettier/prettier */
"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const util = require("./util/index.js");

module.exports = class extends Generator {
    async prompting() {
        this.log(yosay(chalk.blue("New Express Server (Typescript)")));

        const prompts = [
            {
                type: "input",
                name: "projectName",
                message: "Name of project:",
                validate: (value) => {
                        return true;
                }
            },
            {
                type: "list",
                name: "packageManager",
                message: "Select package manager",
                choices: ["npm", "yarn"]
            }
        ];

        this.props = await this.prompt(prompts);

    }

    writing() {

    const templateOptions = {
        projectName: this.props.projectName,
    }

    util.templateToDestTuples.forEach( (pathTuple) => {
        this.fs.copyTpl(
            this.templatePath( pathTuple[0] ),
            this.destinationPath( path.join( this.props.projectName, (pathTuple.length === 1) ? pathTuple[0] : pathTuple[1] ) ),
            templateOptions
        )
    });

        this.fs.readJSON(this.destinationPath("package.json"));
    }

    install() {
        let defaults = {
            npm: false,
            bower: false,
            yarn: false
        };
        defaults[this.props.packageManager] = true;
        this.installDependencies(defaults);
    }
};
