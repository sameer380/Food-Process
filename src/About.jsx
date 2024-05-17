import React from 'react'

function About() {
  return (
    <div>

<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div
                          style={{
                              backgroundColor: "#f75c35",
                              borderRadius:"10px"
                              

                           }
                          
                          }
                      >
                          <div className="mx-auto max-w-xl text-center"
                              style={{
                               marginTop:"180px"
                          }}
                          >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
           I am Mohammad Naziya Niqhat
          </h2>

          <p className="hidden text-white/90 sm:mt-4 sm:block">
            As an Internship Trainee at Codegnan, I am learning and applying the skills of front end tools like HTML, CSS, JavaScript and their frameworks , and back-end in Java and it's framework, and object-oriented programming (OOP) to real-world projects and challenges. I am also pursuing a BCA degree at Parvathaneni Brahmayya Siddhartha College of Arts & Science, where I have acquired multiple certifications in Java and Python from LinkedIn. I am passionate about coding and developing innovative solutions that can make a positive impact on society and the environment. I am eager to expand my knowledge and experience in the field of computer applications and to collaborate with other professionals who share the same vision and values.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Check My Linked
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
                              src="https://thumbs.dreamstime.com/b/three-professional-happy-diverse-international-team-young-business-people-workers-standing-corporate-office-multiethnic-smiling-288530535.jpg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt=""
                              src="https://thumbs.dreamstime.com/b/modern-designers-office-employees-informal-female-group-128649682.jpg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About

