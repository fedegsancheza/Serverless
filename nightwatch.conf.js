require('dotenv').config();

module.exports = {
    'src_folders': ['tests'],
    //'page_objects_path': ['page-objects'],

    'webdriver': {
        'start_process': true,
        'server_path': require('chromedriver').path,
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': './tests/'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': ['--headless','--disable-web-security','--disable-site-isolation-trials','--user-data-dir=%TMP%\temporary-chrome-profile-dir']
                }
            },
            'launch_url': 'http://localhost:3000'
        }
    }
};
