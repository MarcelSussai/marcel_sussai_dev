// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
  interface Window {
    IntersectionObserver: typeof IntersectionObserver
  }
  interface DataCard {
    title: string
    text: string
    icon?: SvelteComponent
  }
}

export {};
