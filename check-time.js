const axios = require('axios');
const telegramBot = require('./telegram');

// create environment variables with your social security number (personnummer)
const socialSecurityNumber = process.env.SOCIAL_SECURITY_NUMBER;
const language = 13 //Swedish
// const language = 4 //English
const location = 1000140 //Stockholm

const data = JSON.stringify({"bookingSession":{"socialSecurityNumber":socialSecurityNumber,"licenceId":5,"bookingModeId":0,"ignoreDebt":false,"ignoreBookingHindrance":false,"examinationTypeId":0,"excludeExaminationCategories":[],"rescheduleTypeId":0,"paymentIsActive":false,"paymentReference":null,"paymentUrl":null},"occasionBundleQuery":{"startDate":"2021-05-18T22:00:00.000Z","locationId":location,"nearbyLocationIds":[],"languageId":language,"tachographTypeId":1,"occasionChoiceId":1,"examinationTypeId":3}});
const config = {
  method: 'post',
  url: 'https://fp.trafikverket.se/Boka/occasion-bundles',
  headers: { 'Content-Type': 'application/json', },
  data : data
};

axios(config)
.then(function (response) {
    const today = new Date()
    const systemDate = new Date(response.data.data.bundles[0].occasions[0].duration.start)
    console.log(`system date: ${systemDate}`);
    const differenceInDays = (systemDate.getTime() - today.getTime()) / (1000 * 3600 * 24);

    if (differenceInDays > 3 && differenceInDays < 20) {
        console.log(`today date: ${today}`);
        console.log(`system date: ${systemDate}`);
        console.log(`difference in days: ${JSON.stringify(differenceInDays)}`);
        telegramBot.sendMessage(`system date: ${systemDate}, schedule it now!!!`);
    }
})
.catch(function (error) {
  console.log(error);
});
