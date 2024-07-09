'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/app/data/name_music.json"
import Footer from "../component/Footer";

function page() {
    const featuredCourses = courseData.courses.filter((course) => course.id === 2)
    return (
        <>
        <div className="mt-40 m-auto p-12 bg-black text-white lg:max-w-4xl lg:px-12 px-5">
            {featuredCourses.map((course) => (
                <div key={course.id}>
                  <h1 className="my-5 text-3xl"> {course.title}</h1>
                  <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                    <p className="my-5">{course.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum doloremque voluptatibus voluptatum officiis ipsa dolorem minima in at aliquam natus fuga consequatur omnis, quas aut quam. Molestiae voluptas exercitationem quibusdam dignissimos, temporibus natus perspiciatis quos ullam cumque aliquam dolore reprehenderit doloribus nostrum adipisci nam ipsam earum obcaecati voluptatem eos consectetur sint quidem tenetur sit? Error alias reprehenderit sunt veritatis, exercitationem obcaecati accusamus rerum consequuntur tempore commodi fuga explicabo consequatur illo odio aut, laborum adipisci provident nam eius consectetur neque sed non, tempora debitis. Aperiam molestiae quidem culpa magnam id fugiat praesentium, dolorum assumenda tempore quibusdam autem illum laborum reprehenderit?</p>
                </div>

            ))}
        </div>
            <Footer/>
            </>

    )
}

export default page