// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			isLoading:boolean;
		}
		// interface PageState {}
		// interface Platform {}
	}
}






// Declarations for importing image files
declare module '*.png' {
	const value: string;
	export default value;
}
					
declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.jpeg' {
	const value: string;
	export default value;
}

declare module '*.gif' {
	const value: string;
	export default value;
}
		
declare module '*.svg' {
	const value: string;
	export default value;
}



export {};
