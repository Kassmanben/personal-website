import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <p>
        I am happy at my current job, so please don't contact me with full-time
        job offers.
      </p>
      <p>
        I am, however, happy to speak at your conference! I gave{" "}
        <a href="https://www.youtube.com/watch?v=NOcdJQW5Rqs">
          a conference talk at Donut.js
        </a>{" "}
        in Febrary of 2020, and I've given lightning talks at{" "}
        <a href="https://www.meetup.com/Portland-DevOps-GroundUp/">
          PDX Dev Ops
        </a>{" "}
        in 2019 and the <a href="http://ml4all.org/">ML4All Conference</a> in
        the summer of 2018.
      </p>
      <p>
        I also love to work on fun side projects, for free or for profit. If you
        have an idea for something you'd like to make with me, let me know! I'm
        particular to projects focusing on the three A's:{" "}
        <b>accessibility, activism, & absurdist humor</b>
      </p>

      <ul className="contact-list">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            class="jam jam-instagram"
          >
            <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
            <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
            <circle cx="15.156" cy="4.858" r="1.237" />
          </svg>
          <a href="https://www.instagram.com/kassman_ben/?hl=en">Instagram</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -5 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            class="jam jam-envelope"
          >
            <path d="M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
          </svg>
          <a href="mailto:me@kassmanben.com">Email</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -4 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            class="jam jam-twitter"
          >
            <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z" />
          </svg>
          <a href="https://www.twitter.com/kassman_ben/">Twitter</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            class="jam jam-linkedin"
          >
            <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
          </svg>
          <a href="https://www.linkedin.com/in/ben-kassman/">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
