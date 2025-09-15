import dynamic from "next/dynamic";

// export * from "./DivisionGroupsDemo";
// export { default } from './DivisionGroupsDemo';

export default dynamic(() => import("./DivisionGroupsDemo"));
