///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import { Booking } from "../support/pages/page_booking"
const booking = new Booking()
describe('Hotel Booking', () => {

    beforeEach(function () {
        booking.visit()
    })

    it.only('Check Availability', function () {
        booking.clickCheckIn()
        booking.enterCheckInDate()
       // booking.selectCheckInDate()
        booking.clickCheckOut()
        //booking.clickNextMonth()
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
        // booking.clickPayandBookNow()
    })

    it('Check not more than 5 rooms can booked', function () {
        booking.clickGuest()
        booking.selectAdultGuest()
    })

})