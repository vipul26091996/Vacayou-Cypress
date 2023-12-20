///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import { Booking } from "../support/pages/page_booking"
const booking = new Booking()

describe('Verify e2e booking workflow', function () {


    describe('Verify booking confirmation for multiple rooms', () => {

        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        let night = 1
        let totalrooms = 3

        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickGuest()
            booking.increaseRooms(totalrooms)
            booking.clickConfirmGuest()
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })

    })


    describe('Verify booking confirmation for 1 night single room', () => {

        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        let night = 1
        let totalrooms = 1

        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
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

        let night = 3
        let totalrooms = 1

        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })

    })

    describe('Verify booking confirmation for maximum Adult guest in a room', () => {

        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        let night = 1
        let totalrooms = 1
        let adultguestcount = 5
        let childrenguestcount = 0
        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickGuest()
            booking.selectAdultGuest(totalrooms, adultguestcount)
            booking.clickConfirmGuest()
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })

    })


    describe('Verify booking confirmation for Adult and Children guest in a room', () => {

        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        let night = 1
        let totalrooms = 1
        let adultguestcount = 2
        let childrenguestcount = 3

        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickGuest()
            booking.selectChildrenGuest(totalrooms, childrenguestcount)
            booking.clickConfirmGuest()
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })
    })

    describe.only('Verify booking confirmation with additional one wellness services', () => {
        before(function () {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })

        let night = 1
        let totalrooms = 1
        let adultguestcount = 2
        let childrenguestcount = 3

        it('Verify Check Availability', () => {
            booking.visitURL()
            booking.clickCheckIn()
            booking.selectCheckInDate()
            booking.clickCheckOut()
            booking.selectCheckOutDate(night)
            booking.clickGuest()
            booking.clickConfirmGuest()
            booking.clickCheckAvailabilityButton()
            booking.verifyAvailability()
        })

        it('Verify Customize Experience', () => {
            booking.enterGuestNames(totalrooms)
            booking.clickContinue()
            booking.selectRooms(totalrooms)
            booking.addWellnessService()
            booking.clickContinueToGuestInformationBtn()
            booking.verifyCustomizeExperience()
        })

        it('Verify Guest Information', () => {
            booking.enterGuestInformation()
            booking.clickProceedToPayment()
            booking.verifyGuestInformation()
        })

        it('Verify Payment and Booking', () => {
            booking.enterCardDetails()
            booking.clickPayandBookNow()
            booking.verifyBooking()
        })
    })

    describe('Verify booking confirmation with add multiple services and remove anyone', () => {

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