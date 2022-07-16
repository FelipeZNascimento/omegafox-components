module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/index.tsx',
        templateFile: './generators/templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/styles.scss',
        templateFile: './generators/templates/styles.scss.hbs'
      },
      {
        type: 'add',
        path: './src/stories/{{pascalCase name}}.stories.tsx',
        templateFile: './generators/templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/test.tsx',
        templateFile: './generators/templates/test.tsx.hbs'
      }
    ]
  });
};
