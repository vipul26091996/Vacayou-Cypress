///<reference types="cypress-xpath"/>
import 'cypress-iframe';
const dayjs = require("dayjs")


//const url = 'https://staging.bookings.vacayou.com/vacayou/8'
const url = 'https://develop.bookings.vacayou.com/vacayou/5'
const checkin_txtbox = '#check-in-input'
const checkout_txtbox = '#check-out-input'
const checkavailability_btn = '#check-availability-button'
const checkinout_date = (month, year, date) => `//span[contains(text(),'${month} ${year}')]/following::button[contains(text(),'${date}')][1]`
const nextMonth = '//button[contains(@class,"css-fp6ecq")]'
const guest_txtbox = '#guests-input'
const rooms_txtbox = '#rooms'
const roomadultguest_txtbox = (roomnum) => `#room-${roomnum}-adults`
const roomchildrenguest_txtbox = (roomnum) => `#room-${roomnum}-children`
const guestconfirm_btn = '#guests-confirm-button'
const skipfornow_customizeexperience = '//a[text()="Skip For Now"]'
const guestnamecontinue_customizeexperience = '#guest-name-continue'
const roomadultfirstname_txtbox = (room, adult) => `#room-${room}-adult-${adult}-first-name`
const roomchildfirstname_txtbox = (room, child) => `#room-${room}-child-${child}-first-name`
const selectroom = '//div[@id="room1"]/following::button[@id="select-room-9865864"][1]'
const customizecontinue_btn = '#customize-continue-button'
const customizeexperience_text = '//h1[text()="Customize Your Experience"]'
//const select_room_btn = (roomno) => `//div[@id="room${roomno}"]/following::button[contains(@id,"select-room")]`
const select_room_btn = (roomno) => `//div[@id="roomPanel-${roomno}"]/following::button[contains(@id,"select-room")]`
const remove_room_btn = '//div[@id="room1"]/following::button[contains(@id,"remove-room")]'



const guestfirstname_txtbox = '#primary-first-name'
const guestlastname_txtbox = '#primary-last-name'
const gueststreetaddress_txtbox = '#primary-street-addr-1'
const guestcity_txtbox = '#primary-city'
const gueststate_ddown = '#state-information-input'
const guestzipcode_txtbox = '#primary-zip'
const guestcountry_ddown = '#country-information-input'
const guestemailaddress_txtbox = '#primary-email-address'
const guestphonenumber_txtbox = '//input[@name="primaryInfo.phone"]'
const roomadultlastname_txtbox = (room, adult) => `#room-${room}-adult-${adult}-last-name`
const roomadultcountry_ddown = '#room-2-adult-2-country'
const tandc_chkbox = '#terms-and-conditions-checkbox'
const guestspecialrequest_txtarea = '#notes-requests'
const guestinsurance_chkbox = '#insurance-checkbox'
const guestallianz_chkbox = '#allianz-checkbox'
const proceedtopayment_btn = '#guest-information-continue'

const cardnumber_txtbox = '#Field-numberInput'
const cardexpiration_txtbox = '#Field-expiryInput'
const cardcvc_txtbox = '#Field-cvcInput'
const cardcountry_ddown = '#Field-countryInput'
const payandbook_btn = '#pay-and-book-button'
const payment_iframe = 'iframe[title="Secure payment input frame"]'

export class Booking {

    visit() {
        cy.visit(url)
    }

    clickCheckIn() {
        cy.get(checkin_txtbox).click()
    }

    selectCheckInDate() {
        const checkinDate = dayjs().format("D")
        const checkinMonth = dayjs().format("MMMM")
        const checkinYear = dayjs().format("YYYY")
        cy.xpath(checkinout_date(checkinMonth, checkinYear, checkinDate)).click()
    }

    selectCheckOutDate() {
        const nextDate = dayjs().add(1, 'day')
        const checkoutYear = nextDate.format("YYYY")
        const checkoutMonth = nextDate.format('MMMM')
        const checkoutDate = nextDate.format('D')
        cy.xpath(checkinout_date(checkoutMonth, checkoutYear, checkoutDate)).click()
    }

    clickCheckOut() {
        cy.get(checkout_txtbox).click()
    }

    clickNextMonth() {
        cy.xpath(nextMonth).click()
    }

    enterCheckInDate() {
        cy.get(checkin_txtbox).type('11/30/2023')
    }

    enterCheckOutDate() {
        cy.get(checkout_txtbox).type('12/02/2023')
    }

    clickCheckAvailabilityButton() {
       // cy.wait(20000)
        cy.get(checkavailability_btn).click()
    }

    clickGuest() {
        cy.get(guest_txtbox).click()
    }

    selectRoomsNo() {
        cy.get(rooms_txtbox).type('2')
    }

    selectAdultGuest() {
        // cy.get(roomadultguest_txtbox(1)).clear().type('6')
    }

    selectChildrenGuest() {
        //cy.get(roomchildrenguest_txtbox(1)).clear().type('0')
    }

    clickConfirmGuest() {
        cy.get(guestconfirm_btn).click()
    }

    increaseRooms(roomnumber) {
        cy.get(rooms_txtbox).click()
        for (let i = 1; i < roomnumber; i++) {
            cy.get(rooms_txtbox).type('{uparrow}', { force: true }).trigger('input')
        }
    }

    verifyTotalGuests(roomnumber) {
        // cy.wait(5000)
        let totalGuest = 0
        for (let i = 1; i <= roomnumber; i++) {
            cy.get(roomadultguest_txtbox(i)).invoke('val').then((value) => {
                totalGuest = parseInt(value, 10) + totalGuest
            })
            cy.get(roomchildrenguest_txtbox(i)).invoke('val').then((value) => {
                totalGuest = parseInt(value, 10) + totalGuest
                if (i == roomnumber) {
                    cy.wrap(totalGuest).should('be.lte', 10)
                    cy.log('the Total Guest = ' + totalGuest)
                }
            })
        }
    }

    enterGuestNames(roomnumber) {
        cy.xpath(customizeexperience_text)
        cy.get('#__next').then(function ($body) {
            for (let i = 1; i <= roomnumber; i++) {

                for (let j = 1; j <= 5; j++) {
                    //cy.get(roomadultfirstname(i, j)).should('exist').type('abc')
                    if ($body.find(roomadultfirstname_txtbox(i, j)).length) {
                        cy.get(roomadultfirstname_txtbox(i, j)).type('Adult ' + j)
                    }
                }

                for (let j = 1; j <= 4; j++) {
                    if ($body.find(roomchildfirstname_txtbox(i, j)).length) {
                        cy.get(roomchildfirstname_txtbox(i, j)).type('Child ' + j)
                    }
                }
            }
        })
    }

    clickSkipforNow() {
        cy.xpath(skipfornow_customizeexperience).click()
    }

    clickContinue() {
        cy.get(guestnamecontinue_customizeexperience).click()
    }

    selectRooms(roomnumber) {
        // for (let i = 1; i <= number; i++) {
        //     cy.xpath(selectroom).click()
        // }
        for (let i = 1; i <= roomnumber; i++) {
            cy.xpath(select_room_btn(i)).first().click()
        }
    }

    clickContinueToGuestInformationBtn() {
        cy.get(customizecontinue_btn).click()
    }

    enterGuestInformation() {
        cy.get(guestfirstname_txtbox).type('Test')
        cy.get(guestlastname_txtbox).type('Singh')
        cy.get(gueststreetaddress_txtbox).type('Street Address 1')
        cy.get(guestcity_txtbox).type('City')
        cy.get(gueststate_ddown).type('Guam').type('{downarrow}').type('{enter}')
        cy.get(guestzipcode_txtbox).type('100001')
        cy.get(guestemailaddress_txtbox).type('test@ymail.com')
        cy.xpath(guestphonenumber_txtbox).type('9876543210')

        cy.get('#__next').then(function ($body) {
            for (let i = 1; i <= 4; i++) {
                for (let j = 1; j <= 5; j++) {
                    if ($body.find(roomadultfirstname_txtbox(i, j)).length) {
                        cy.get(roomadultfirstname_txtbox(i, j)).then(($txtbox) => {
                            if ($txtbox.val() === '') {
                                cy.get(roomadultfirstname_txtbox(i, j)).type('Adult ' + j)
                            }
                        })
                    }
                }

                for (let j = 1; j <= 5; j++) {
                    if ($body.find(roomadultlastname_txtbox(i, j)).length) {
                        cy.get(roomadultlastname_txtbox(i, j)).type('Singh ' + j)
                    }
                }
            }
        })
        cy.get(guestinsurance_chkbox).click()
        // cy.get(guestallianz_chkbox).click()
        cy.get(tandc_chkbox).click()
    }

    clickProceedToPayment() {
        cy.get(proceedtopayment_btn).click()
    }

    enterCardDetails() {

        // cy.xpath(payment_iframe).then(($iframe)=>{
        //     $iframe.find(cardnumber_txtbox).type('4111111111111111')
        // })


        // cy.get(payment_iframe)
        //     .its('0.contentDocument')
        //     .its('body')
        //     .find(cardnumber_txtbox).type('4111111111111111')


        // cy.get(payment_iframe)
        //     .should('be.visible')
        //     .should('be.empty')
        //     .then(($iframe) => {
        //         const $body = $iframe.contents().find('body')
        //         cy.wrap($body).find(cardnumber_txtbox).type('4111111111111111')
        //     })

        // cy.xpath(payment_iframe).then(($iframe) => {
        //     const iframeBody = $iframe.contents().find('body');
        //     cy.wrap(iframeBody).find(cardnumber_txtbox).type('4111111111111111');
        //   });


        // cy.iframe(payment_iframe).within(() => {
        //     cy.get(cardnumber_txtbox).type('4111111111111111')
        //     cy.get(cardexpiration_txtbox).type('0325')
        //     cy.get(cardcvc_txtbox).type('111')
        // })

        // cy.frameLoaded(payment_iframe)
        // cy.iframe(payment_iframe).find(cardnumber_txtbox).type('4111111111111111')

        const iframe = cy.get(payment_iframe).its('0.contentDocument.body').should('be.visible').and('not.be.empty').then(cy.wrap)
        iframe.get(cardnumber_txtbox).type('4111111111111111')


    }

    clickPayandBookNow() {
        cy.get(payandbook_btn).click()
    }
}
