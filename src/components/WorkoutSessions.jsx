
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Yoga is an ancient method to balance physical and mental health. It includes various poses (asanas), breathing exercises (pranayama), and meditation. Yoga helps improve flexibility, reduce stress, and enhance overall health.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Weight training includes various exercises involving lifting weights such as dumbbells, barbells, and machines. It helps increase muscle strength and size, strengthens bones, and boosts metabolism.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Zumba........</h4>
            <p>
            Zumba is a dance-based cardio workout performed to music. This workout is not only fun but also helps burn calories and improve flexibility. It is especially good for those who want to view exercise as a form of entertainment.
            </p>
          </div>
          <div>
            <h4>Kickboxing...............</h4>
            <p>
            Kickboxing is a high-intensity workout that engages the entire body's muscles. It increases stamina, strength, and flexibility while also teaching self-defense techniques.
            </p>
          </div>
          <div>
            <h4>High-Intensity Interval Training (HIIT)...........</h4>
            <p>
            HIIT workouts consist of sets of intense and powerful exercises performed in short intervals, followed by brief rest periods. This time-saving and highly effective workout boosts metabolism and burns more calories in less time.
            </p>
          </div>
          <div>
            <h4>Weight Training.....</h4>
            <p>
            Weight training includes various exercises involving lifting weights such as dumbbells, barbells, and machines. It helps increase muscle strength and size, strengthens bones, and boosts metabolism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
