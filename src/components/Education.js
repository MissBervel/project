import { Box } from '@chakra-ui/react'
import React from 'react'
import '../App.css'

export default function Education() {
  return (
    <Box p='3%'>
      <section class="education" id="education">

      <h1 class="heading"> My <span>Education</span> </h1>

      <div class="box-container">

          <div class="box">
              <i class="fas fa-graduation-cap"></i>
              <span>1.</span>
              <h3>JUNIOR HIGH SCHOOL</h3>
              <p><span>Course Read:</span> All Subject</p>
          </div>

          <div class="box">
              <i class="fas fa-graduation-cap"></i>
              <span>2.</span>
              <h3>SENIOR HIGH SCHOOL</h3>
              <p><span>Course Read:</span> General Arts</p>
              <p><span>Subjects:</span> Elective Maths, Economics, Geography, Govenment, Core Maths, English, Social Studies.</p>
          </div>

          <div class="box">
              <i class="fas fa-graduation-cap"></i>
              <span>3.</span>
              <h3>TERTIARY</h3>
              <p><span>Programme:</span> Bsc. Information Technology</p>
              <p><span>Subjects:</span> African Studies, Programming I, Digital & Logic Design, Multimedia & Web Design, Computer Organization.</p>
          </div>

      </div>

      </section>
    </Box>
  )
}
