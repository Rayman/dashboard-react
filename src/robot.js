import {Robot} from 'robot-api';

const robot = new Robot();
robot.connect();

window.r = robot;

export default robot;
