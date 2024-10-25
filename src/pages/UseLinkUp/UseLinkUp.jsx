const UseLinkUp = () => {
  return (
    <div className="md:mt-10 w-[80%] md:ml-20">
      <h2 className="text-4xl font-bold dark:text-white">How to Use LinkUp</h2>
      <p className="mt-10 text-2xl items-center justify-between text-justify font-medium">
        Step-by-Step Guide: <br />{" "}
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        <span className="font-medium">1. Sign Up / Log In: </span>
        <br /> If you're a new user, sign up by providing your email, name, and
        password. <br /> If you already have an account, log in using your
        credentials.
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        <span className="font-medium">2. Create a Meeting:</span> <br /> After
        logging in, navigate to the "Create Meeting" section. <br /> Choose your
        preferred date and time from the available slots. <br /> Add meeting
        details such as title, description, and invitee emails.
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        <span className="font-medium">3. Confirm the Booking:</span> <br />{" "}
        Review your booking details and confirm by clicking "Submit."
        <br /> You will receive a confirmation email with the meeting details.
        emails.
      </p>
      <p className="mt-5 items-center justify-between text-justify">
        <span className="font-medium">4. Manage Your Meetings:</span> <br />{" "}
        Access the "My Meetings" section to view, reschedule, or cancel upcoming
        bookings.
        <br />
      </p>
    </div>
  )
}

export default UseLinkUp
