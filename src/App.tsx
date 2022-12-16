import './App.css';
import React from "react";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-EYTW17TWRX');

ReactGA.send("pageview");

interface SkillsItemProps {
  skillname: string;
  icon: string;
  link: string;
}

function SkillsItem(props: SkillsItemProps) {
  return (
    <div className='flex font-mono text-xl tracking-wider my-10 w-40 mx-5'>
      <img src={props.icon} alt='icon' className='w-10 h-10 rounded-lg avatar shadow'></img>
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
      <img src={props.icon} alt='icon' className='w-10 h-10 rounded-lg inline avatar shadow'></img>
      <a className='font-mono text-xl tracking-wider mx-3 my-1 hover:underline hover:cursor-pointer' href={props.link} target="_blank" rel="noopener noreferrer">{props.skillname} </a>
      </div>
      <div className="skills-bar bg-gray-900 h-3 my-3 ml-6 rounded-lg w-2/3">
        <div className="skills-inner bg-blue-600 h-3 rounded-lg" style={{width: props.percentage.toString() + '%'}}></div>
      </div>
    </div>
  )
}

interface ProjectItemProps {
  icon: string;
  name: string;
  description: string;
  link?: string;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    props.link ?
    <div className='flex-1 bg-opacity-30 p-4 my-2 rounded-md hover:scale-105 transform ease-in-out duration-300 bg-gray-500'>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="font-mono">
      <div className="flex flex-row items-center">
      <img src={props.icon} alt='icon' className="w-12 h-12 object-contain"></img> 
    <div className="ml-4 flex flex-col justify-center">
      <h2 className="text-lg font-bold flex items-center">
        {props.name}
        </h2> <p className="text-sm">
        {props.description}
      </p></div></div></a></div>
      :
      <div className='flex-1 bg-opacity-30 p-4 my-2 rounded-md hover:scale-105 transform ease-in-out duration-300 bg-gray-500 font-mono'>
      <div className="flex flex-row items-center">
      <img src={props.icon} alt='icon' className="w-12 h-12 object-contain"></img> 
    <div className="ml-4 flex flex-col justify-center">
      <h2 className="text-lg font-bold flex items-center">
        {props.name}
        </h2> <p className="text-sm">
        {props.description}
      </p></div></div></div>
  )
}

class App extends React.Component {
  
  render () {
    return (
      <>
        <div className='my-4 mx-5'>
          <h1 className='header flex items-center'>
            <span className="ml-4 font-mono text-xl tracking-wider">@GoatInAHat</span>
          </h1>
        </div>
          <div className="main max-w-3xl px-8 mx-auto">
            <h1 className="mt-4 text-3xl font-bold">
              <div className='text-3xl tracking-wider font-mono'>
                <div className='h-7'></div>
                <span className='text-3xl tracking-wider font-mono'>Hey, I'm Bennett.</span><div className="my-1">
                </div></div>
                <p className='my-3 text-base font-mono font-normal'>I'm a high school student, fullstack developer, and programmer for 334Z. I'm interested in coding, mountain biking, and robotics.</p>
          </h1>

          <div className='flex'>
            <h1 className='my-5 font-mono text-2xl tracking-wider'>Featured Projects</h1>
          </div>
          <ProjectItem icon='https://ap-practice.goatinahat.dev/icon.png' name='AP Practice' description='A website with free practice MCQs for AP exams. Contains ~ 10,000 questions across 19 AP courses.' link='https://ap-practice.goatinahat.dev/'></ProjectItem>
          <ProjectItem icon='/imgs/MFB.png' name='Meme Feed Bot' description='A Discord bot that constantly sends short videos in any Discord server. It currently has over 1m users across 20k Discord servers.'></ProjectItem>
          

          <h1 className='my-5 font-mono text-2xl tracking-wider'>Languages</h1>
          <SkillsBar skillname='Python' link='https://www.python.org/' icon='/imgs/python.png' percentage={100}></SkillsBar>
          <SkillsBar skillname='JavaScript' link='https://www.javascript.com/' icon='/imgs/javascript.png' percentage={95}></SkillsBar>
          <SkillsBar skillname='TypeScript' link='https://www.typescriptlang.org/' icon='/imgs/typescript.png' percentage={90}></SkillsBar>
          <SkillsBar skillname='C++' link='https://isocpp.org/' icon='/imgs/cpp.png' percentage={60}></SkillsBar>
          <SkillsBar skillname='GDScript' link='https://godotengine.org/' icon='/imgs/godot.png' percentage={40}></SkillsBar>
          <SkillsBar skillname='Java' link='https://www.java.com/en/' icon='/imgs/java.png' percentage={15}></SkillsBar>
          <SkillsBar skillname='C#' link='https://dotnet.microsoft.com/en-us/' icon='/imgs/csharp.svg' percentage={10}></SkillsBar>
          

          <h1 className='my-5 font-mono text-2xl tracking-wider'>Jobs & Internships</h1>
          <ProjectItem icon='/imgs/henson.png' name='The Jim Henson Company' description='[summer 2021] Developing a user-friendly application that allowed puppeteers to adjust settings and parameters of animatronics control systems.'></ProjectItem>
        

          <div className='flex flex-wrapmy-5 font-mono text-2xl tracking-wider'>Skills</div>
            <div className='flex flex-wrap my-5 font-mono text-xl tracking-wider justify-around'>
              <SkillsItem skillname='HTML5' link='https://html.com/html5/' icon='/imgs/html5.png'></SkillsItem>
              <SkillsItem skillname='CSS' link='https://developer.mozilla.org/en-US/docs/Web/CSS' icon='/imgs/css.png'></SkillsItem>
              <SkillsItem skillname='TailWind' link='https://developer.mozilla.org/en-US/docs/Web/CSS' icon='/imgs/tailwind.png'></SkillsItem>
              <SkillsItem skillname='React.js' link='https://reactjs.org/' icon='/imgs/react.png'></SkillsItem>
              <SkillsItem skillname='Node.js' link='https://nodejs.dev/' icon='/imgs/node.png'></SkillsItem>
              <SkillsItem skillname='Git' link='https://git-scm.com/' icon='/imgs/git.png'></SkillsItem>
              <SkillsItem skillname='PostgreSQL' link='https://www.postgresql.org/' icon='/imgs/elephant.png'></SkillsItem>
              <SkillsItem skillname='GraphQL' link='https://graphql.org/' icon='/imgs/GraphQL.png'></SkillsItem>
              <SkillsItem skillname='Apollo' link='https://www.apollographql.com/' icon='/imgs/apollo.png'></SkillsItem>
              <SkillsItem skillname='discord.js' link='https://discord.js.org/' icon='/imgs/discordjs.png'></SkillsItem>
              <SkillsItem skillname='blender' link='https://www.blender.org/' icon='/imgs/blender.png'></SkillsItem>
              <SkillsItem skillname='Godot' link='https://godotengine.org/' icon='/imgs/godot.png'></SkillsItem>
              <SkillsItem skillname='VEX V5' link='https://www.vexrobotics.com/v5' icon='/imgs/vex.svg'></SkillsItem>
              <SkillsItem skillname='PROS' link='https://pros.cs.purdue.edu/' icon='/imgs/pros.png'></SkillsItem>
            </div>
          </div>
      </>
    );
  }
}

export default App;
