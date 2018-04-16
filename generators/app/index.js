'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Este es el ${chalk.red('generator-angular-mika')} `)
    );

    const prompts = [
      {
        type: 'input',
        name: 'aplicationName',
        message: 'Ingrese el nombre de la aplicación',
        default: 'my-aplication-name'
      },
      {
        type: 'input',
        name: 'aplicationDescription',
        message: 'Ingrese una descripción para la aplicación',
        default: 'my-aplication-description'
      },
      {
        type: 'input',
        name: 'aplicationAuthor',
        message: 'Ingrese el nombre del autor de la aplicación',
        default: 'KaguilarA'
      },
      {
        type: 'input',
        name: 'aplicationVersion',
        message: 'Ingrese el número de la versión del proyecto',
        default: '0.0.0'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    const projectName = this.props.aplicationName;

    this.fs.copyTpl(
      this.templatePath('_aplicationName'),
      this.destinationPath(`${projectName}`),
      this.props
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    }).then(() => console.log('Dependncias instaladas correctamente'));
  }
  
};
