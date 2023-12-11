///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import { Booking } from "../support/pages/page_booking"
const booking = new Booking()

describe('Verify e2e booking workflow', function () {

    let roomno = 1
    after(function () {
        cy.log('Passess')
        cy.clearAllSessionStorage()
    })
    describe('Verify booking confirmation for 1 night single room', () => {



        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate()
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(roomno)
            booking.clickContinue()
            booking.selectRooms(roomno)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })
    })

    describe('Verify booking confirmation for multiple night single room', () => {

        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        it('Pass', () => {
            cy.log('Test')
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })

    })

})






/*

describe('Hotel Booking', () => {

    beforeEach(function () {
        booking.visitURL()
    })

    it.only('Check Availability', function () {
        booking.clickCheckIn()
        booking.enterCheckInDate()
        // booking.selectCheckInDate()
        booking.clickCheckOut()
        booking.enterCheckOutDate()
        //booking.selectCheckOutDate()
        booking.clickGuest()
        booking.increaseRooms(4)
        booking.verifyTotalGuests(4)
        // booking.clickGuest()
        // booking.selectRooms()
        // booking.selectAdultGuest()
        // booking.selectChildrenGuest()
        booking.clickConfirmGuest()
        booking.clickCheckAvailabilityButton()
        booking.enterGuestNames(4)
        //booking.clickSkipforNow()
        // cy.wait(20000)
        booking.clickContinue()
        booking.selectRooms(4)
        booking.clickContinueToGuestInformationBtn()
        booking.enterGuestInformation()
        booking.clickProceedToPayment()
        booking.enterCardDetails()
        booking.clickPayandBookNow()
        booking.verifyBooking()
    })

    it('Pass it Block', () => {
        cy.log('Pass it block')
    })

    it('Check not more than 5 rooms can booked', function () {
        booking.clickGuest()
        booking.selectAdultGuest()
        throw new Error('This test intentionally fails')
    })

})

*/