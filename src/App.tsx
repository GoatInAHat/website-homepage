import './App.css';
import React, { useState } from "react";

interface SkillsItemProps {
  skillname: string;
  icon: string;
  link: string;
}

function SkillsItem(props: SkillsItemProps) {
  return (
    <div className='flex font-mono text-xl tracking-wider my-10 w-40 mx-5'>
      <img src={props.icon} className='w-10 h-10 rounded-lg avatar shadow'></img>
      <a className='font-mono text-xl tracking-wider mx-3 my-1 hover:underline hover:cursor-pointer' href={props.link} target="_blank" rel="noopener noreferrer">{props.skillname} </a>
    </div>
  )
}


interface SkillsBarProps {
  skillname: string;
  icon: string;
  percentage: number;
  link: string;
}

function SkillsBar(props: SkillsBarProps) {
  return (
    <div className='flex font-mono text-xl tracking-wider my-5 justify-between'>
      <div className='justify-around'>
      <img src={props.icon} className='w-10 h-10 rounded-lg inline avatar shadow'></img>
      <a className='font-mono text-xl tracking-wider mx-3 my-1 hover:underline hover:cursor-pointer' href={props.link} target="_blank" rel="noopener noreferrer">{props.skillname} </a>
      </div>
      <div className="skills-bar bg-gray-900 h-3 my-3 ml-6 rounded-lg w-2/3">
        <div className="skills-inner bg-blue-600 h-3 rounded-lg" style={{width: props.percentage.toString() + '%'}}></div>
      </div>
    </div>
  )
}

class App extends React.Component {
  
  render () {
    return (
      <>
        <div className='my-4 mx-5'>
          <h1 className='header flex items-center'>
            <img src='/profile.webp' className="profilepic w-10 h-10 rounded-lg inline avatar shadow"></img>
            <span className="ml-4 font-mono text-xl tracking-wider">GoatInAHat</span>
          </h1>
        </div>
          <div className="main max-w-3xl px-8 mx-auto">
            <div><img src="/profile.webp" className="profilepic w-32 h-32 rounded-3xl inline avatar my-5"></img></div>
            <h1 className="mt-4 text-3xl font-bold">
              <div className='text-3xl tracking-wider font-mono'>
                GoatInAHat
                </div><div className="my-1"><div className="text-lg tracking-wide font-mono">[Bennett Vernon]</div></div>
                <p className='my-3 text-base font-mono font-normal'>Hi! I'm a high school student, fullstack developer, and programmer for 3324Z. I'm interested in coding, mountain biking, and robotics.</p>
          </h1>

          <h1 className='my-5 font-mono text-2xl tracking-wider'>Languages</h1>
          <SkillsBar skillname='Python' link='https://www.python.org/' icon='https://www.python.org/static/favicon.ico' percentage={100}></SkillsBar>
          <SkillsBar skillname='JavaScript' link='https://www.javascript.com/' icon='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' percentage={95}></SkillsBar>
          <SkillsBar skillname='TypeScript' link='https://www.typescriptlang.org/' icon='https://www.typescriptlang.org/favicon-32x32.png' percentage={90}></SkillsBar>
          <SkillsBar skillname='C++' link='https://isocpp.org/' icon='https://isocpp.org/favicon.ico' percentage={60}></SkillsBar>
          <SkillsBar skillname='GDScript' link='https://godotengine.org/' icon='https://godotengine.org/themes/godotengine/assets/og_image.png' percentage={40}></SkillsBar>
          <SkillsBar skillname='Java' link='https://www.java.com/en/' icon='https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png' percentage={15}></SkillsBar>
          <SkillsBar skillname='C#' link='https://dotnet.microsoft.com/en-us/' icon='https://cdn.worldvectorlogo.com/logos/c--4.svg' percentage={10}></SkillsBar>
          
        
          <div className='flex flex-wrapmy-5 font-mono text-2xl tracking-wider'>Skills</div>
            <div className='flex flex-wrap my-5 font-mono text-xl tracking-wider justify-around'>
              <SkillsItem skillname='HTML5' link='https://html.com/html5/' icon='https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png'></SkillsItem>
              <SkillsItem skillname='CSS' link='https://developer.mozilla.org/en-US/docs/Web/CSS' icon='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/css.png'></SkillsItem>
              <SkillsItem skillname='TailWind' link='https://developer.mozilla.org/en-US/docs/Web/CSS' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png'></SkillsItem>
              <SkillsItem skillname='React.js' link='https://reactjs.org/' icon='https://reactjs.org/favicon.ico'></SkillsItem>
              <SkillsItem skillname='Node.js' link='https://reactjs.org/' icon='https://nodejs.dev/favicon-32x32.png'></SkillsItem>
              <SkillsItem skillname='Git' link='https://git-scm.com/' icon='https://git-scm.com/favicon.ico'></SkillsItem>
              <SkillsItem skillname='PostgreSQL' link='https://www.postgresql.org/' icon='https://www.postgresql.org/media/img/about/press/elephant.png'></SkillsItem>
              <SkillsItem skillname='GraphQL' link='https://graphql.org/' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png'></SkillsItem>
              <SkillsItem skillname='Apollo' link='https://www.apollographql.com/' icon='https://aws1.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png'></SkillsItem>
              <SkillsItem skillname='discord.js' link='https://discord.js.org/' icon='https://discord.js.org/favicon-32x32.png'></SkillsItem>
              <SkillsItem skillname='blender' link='https://www.blender.org/' icon='https://iconarchive.com/download/i98223/dakirby309/simply-styled/Blender.ico'></SkillsItem>
              <SkillsItem skillname='Godot' link='https://godotengine.org/' icon='https://godotengine.org/themes/godotengine/assets/og_image.png'></SkillsItem>
              <SkillsItem skillname='VEX V5' link='https://www.vexrobotics.com/v5' icon='https://content.vexrobotics.com/vexheader/vexRed.svg'></SkillsItem>
              <SkillsItem skillname='PROS' link='https://pros.cs.purdue.edu/' icon='https://pros.cs.purdue.edu/_static/img/pros-tux.png'></SkillsItem>
            </div>
          </div>
      </>
      
    );
  }
}

export default App;
