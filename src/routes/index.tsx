import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	const state = useStore<{ char: string }>({
		char: 'A',
	});

	const searchData = useResource$(async ({ previous }) => {});

	return (
		<Resource
			resource={searchData}
			onPending={() => <></>}
			onResolved={() => (
				<>
					<h1>{state.char}</h1>
					<button
						onClick$={() => {
							state.char = 'B';
						}}
					>
						Change state at runtime
					</button>
				</>
			)}
		/>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik City',
};
