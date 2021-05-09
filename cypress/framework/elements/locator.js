export const charts = {
    TITLE: '//h1[contains(text(),"Charts")]',
    CHART_TYPE_FIELD: '//*[@id="chartSelect"]',
    SUBMIT_BUTTON: '//*[@id="myButton1"]',
    CHART_TYPE_FIELD2: '//*[@id="chartSelect2"]',
    SUBMIT_BUTTON2: '//*[@id="myButton2"]',
    CHART1: '//*[@id="myChart"]',
    CHART2: '//*[@id="myChart2"]'
};
export const clientOnBoarding = {
    PHONE_FIELD: '//*[@id="_telephone"]',
    SLACK_EMAIL_FIELD: '//*[@id="slackemail"]',
    YOUR_EMAIL_FIELD: '//*[@id="youremail"]',
    FACEBOOK_CHECKBOX: '//*[@id="facebook"]',
    INSTAGRAM_CHECKBOX: '//*[@id="instagram"]',
    TWITTER_CHECKBOX: '//*[@id="twitter"]',
    PINTEREST_CHECKBOX: '//*[@id="pinterest"]',
    LINKEDIN_CHECKBOX: '//*[@id="linkedin"]',
    SOCIAL_MEDIA_LOGINS_FIELD: '//*[@id="social_media_logins"]',
    THREE_TIMES_RADIO_BUTTON: '//*[@id="three_times"]',
    FIVE_TIMES_RADIO_BUTTON: '//*[@id="five_times"]',
    SEVEN_TIMES_RADIO_BUTTON: '//*[@id="seven_times"]',
    DONE_RADIO_BUTTON: '//*[@id="done"]',
    NOT_NEEDED_RADIO_BUTTON: '//*[@id="not_needed"]',
    SEND_BUTTON: '//*[@id="sendButton"]',
    CANCEL_BUTTON: '//*[@id="quantityCancel"]',
    OUTPUT_TEXT: '//*[@id="newClientRegistration"]'
};
export const forms = {
    TITLE: '//h1[contains(text(),"Forms")]',
    MODAL_BUTTON: '/html/body/div[3]/div[3]/button',
    NAME_FIELD: '//*[@id="myname"]',
    EMAIL_FIELD: '//*[@id="myemail"]',
    PASSWORD_FIELD: '//*[@id="mypassword"]',
    WEBSITE_FIELD: '//*[@id="myurl"]',
    PHONE_FIELD: '//*[@id="mytelephone"]',
    REFERENCE_FIELD: '//*[@id="reference"]',
    QUESTION_RADIO_BUTTON: '//*[@id="questionitem"]',
    COMMENT_RADIO_BUTTON: '//*[@id="commentitem"]',
    COMMENTS_FIELD: '//*[@id="myComments"]',
    SEND_BUTTON: '//*[@id="sendButton"]',
    MODAL_TITLE: '//*[@id="modalTitle"]',
    MODAL_CLOSE_BUTTON: '//*[@id="myModal"]/div/span'
};
export const home = {
    TITLE: '//h1[contains(text(),"Home")]',
    MODAL_BUTTON: '/html/body/div[3]/div[3]/button',
    REGISTRATION_BUTTON: '//*[@id="register1"]',
    CLIENT_ONBOARDING_BUTTON: '//*[@id="register2"]',
    MARKETING_AGENT_REGISTRATION_BUTTON: '//*[@id="register3"]'
};
export const marketingAgentsRegistration = {
    TITLE: '//*[@id="registration_modal_3"]/div/div/div/div/div/h4/strong',
    FIRST_NAME_FIELD: '//*[@id="firstname"]',
    LAST_NAME_FIELD: '//*[@id="lastname"]',
    EMAIL_FIELD: '//*[@id="email"]',
    COMPANY_NAME_FIELD: '//*[@id="companyname"]',
    PHONE_FIELD: '//*[@id="telephone"]',
    DESCRIBE_FIELD: '//*[@id="social_media_logins"]',
    SEND_BUTTON: '//*[@id="sendButton"]',
    CANCEL_BUTTON: '//*[@id="quantityCancel"]',
    OUTPUT_TEXT: '//*[@id="newAgentRegistration"]'
};
export const modals = {
    TITLE: '//h1[contains(text(),"Modals")]',
    QUANTITY_BUTTON: '//button[contains(text(),"Quantity")]',
    ALERT_BUTTON: '//button[contains(text(),"Alert")]',
    SECURITY_BUTTON: '//button[contains(text(),"Security")]',
    SETTINGS_BUTTON: '//button[contains(text(),"Settings")]',

    ADD_USER: '//*[@id="addUser"]',
    NAME_FIELD: '//*[@id="name"]',
    USERNAME_FIELD: '//*[@id="username"]',
    EMAIL_ADDRESS_FIELD: '//*[@id="email"]',
    ADDRESS_FIELD: '//*[@id="address"]',
    PHONE_FIELD: '//*[@id="phone"]',
    WEBSITE_FIELD: '//*[@id="website"]',
    COMPANY_FIELD: '//*[@id="company"]',
    SUBMIT_BUTTON: '//*[@id="submitUser"]'
};
export const navbar= {
    HOME: '//*[@id="responsive-menu"]/div[1]/ul/li[2]/a',
    TABLES: '//*[@id="responsive-menu"]/div[1]/ul/li[3]/a',
    FORMS: '//*[@id="responsive-menu"]/div[1]/ul/li[4]/a',
    MODALS: '//*[@id="responsive-menu"]/div[1]/ul/li[5]/a',
    VARIOUS: '//*[@id="responsive-menu"]/div[1]/ul/li[6]/a',
    CHARTS: '//*[@id="responsive-menu"]/div[1]/ul/li[7]/a'
};
export const base_url = 'http://www.piassa.ca/test/';
export const page = {
    HOME: base_url + 'index.html',
    TABLES: base_url + 'tables.html',
    FORMS: base_url + 'forms.html',
    MODALS: base_url + 'modals.html',
    VARIOUS: base_url + 'various.html',
    CHARTS: base_url + 'charts.html'
};
export const registration = {
    TITLE: '//*[@id="registration_modal_1"]/div/div/div/div/div/h4/strong',
    FIRST_NAME_FIELD: '//*[@id="_firstname"]',
    LAST_NAME_FIELD: '//*[@id="_lastname"]',
    STREET_ADDRESS_1_FIELD: '//*[@id="address1"]',
    STREET_ADDRESS_2_FIELD: '//*[@id="address2"]',
    CITY_FIELD: '//*[@id="city"]',
    STATE_FIELD: '//*[@id="state"]',
    ZIP_CODE_FIELD: '//*[@id="zipcode"]',
    COUNTRY_FIELD: '//*[@id="reference"]',
    COUNTRY_OPTION: '//*[@id="reference"]/option[2]',
    PHONE_FIELD: '//*[@id="telephone"]',
    EMAIL_FIELD: '//*[@id="email"]',
    COMMENT_FIELD: '//*[@id="myComments"]',
    SEND_BUTTON: '//*[@id="sendButton"]',
    CANCEL_BUTTON: '//*[@id="CancelRegistration"]',
    OUTPUT_TEXT: '//*[@id="newRegistration"]'
};
export const tables = {
    TITLE: '//h1[contains(text(),"Tables")]',
};
export const various = {
    TITLE: '//h1[contains(text(),"Various")]'
};
