const Faqs = () => {
  return (
    <div className="md:mt-10 w-[80%] md:ml-20">
      <h2 className="text-4xl font-bold dark:text-white">
        Frequently Asked Questions (FAQs)
      </h2>
      <p className="mt-10 items-center text-2xl justify-between text-justify font-medium">
        How do I cancel or reschedule a meeting?
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        To cancel or reschedule a meeting, simply head over to the My Meetings
        section on your dashboard. Here, you’ll see a list of all your upcoming
        meetings. Select the specific meeting you want to modify by clicking on
        it. You’ll be presented with two options: "Edit" to change the meeting
        details (such as time or participants) or "Cancel" to completely remove
        the meeting from your schedule. Once you confirm your action, all
        participants will automatically be notified of the changes via email.
      </p>
      <p className="mt-10 items-center text-2xl justify-between text-justify font-medium">
        Can I invite multiple people to a meeting?
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        Yes, LinkUp makes it easy to invite multiple participants to your
        meeting. During the meeting setup process, you’ll find an option to add
        invitees by entering their email addresses in the provided field. You
        can add as many participants as you need, whether it's a small group or
        a large team. Each participant will receive an email invitation with all
        the meeting details, including time, date, and the link to join. This
        feature is perfect for coordinating team meetings, webinars, or group
        consultations.
      </p>
      <p className="mt-10 items-center text-2xl justify-between text-justify font-medium">
        Will I get a reminder for my meetings?
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        Absolutely! LinkUp is designed to help you stay organized and punctual.
        After booking your meeting, you’ll receive a confirmation email
        immediately, and closer to the scheduled time, LinkUp will automatically
        send reminders to ensure you're prepared. You can customize your
        reminder settings in your user profile to receive notifications at your
        preferred intervals, such as 24 hours before, 1 hour before, or even 15
        minutes before the meeting. These email reminders ensure that you and
        your participants are always on track and never miss a scheduled
        meeting.
      </p>
    </div>
  )
}

export default Faqs
