Package.describe({
  name: 'maximum:server-transform',
  version: '0.5.0',
  summary: 'Meteor package to transform documents on publish',
  git: 'https://github.com/maximummeteor/server-transform',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'mongo',
    'underscore',
    'maximum:package-base@1.1.2',
    'peerlibrary:reactive-mongo@0.1.1',
    'lai:collection-extensions@0.2.1_1',
    'dburles:mongo-collection-instances@0.3.5',
    'peerlibrary:server-autorun@0.5.2'
  ]);

  api.addFiles([
    'publish_helper.coffee',
    'server-transform.coffee',
    'extend.coffee'
  ], 'server');

  api.export('ServerTransform');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'coffeescript',
    'mongo',
    'maximum:server-transform'
  ]);
  api.addFiles('tests/server-transform.coffee');
});
