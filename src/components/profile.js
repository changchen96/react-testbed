export default function Gallery(){

    //Note: Never define a component inside another component! It is very slow and causes bugs!
    return (
        <section>
            <p>Amazing scientists</p>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
  }

  function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }