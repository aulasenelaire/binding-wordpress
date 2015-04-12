## Binding project
This is the Wordpress installation for binding project. It's based on [Bedrock](BEDROCK-README.md)

## Translate theme with Poedit
In Mac OSX you can translate Gettext projects with [Poedit](http://poedit.net/).

### Steps to setup Poedt
1. Open Poedit App
2. Go to menu Poedit > Catalogs Manager
3. Create Catalog pointing your .po files in your theme
4. Open one of your .po file from Catalog list.
5. Configure catalog source

### Configure Poedit catalog source
A .po file is a Catalog in Poedit. You've to configure the sources from where a .po file can get NEW keys.
This is necessary to view new transtations added in your theme in your .php file. To configure code source for a .po file. In Poedit go to
(with that .po open) top menu Catalog > Properties... Then in 'Properties...' go to `Sources paths` and point to your Wordpress theme files.You also need to configure `Source keywords`. For Wordpres add 3: `_`, `__` and `_e`.
