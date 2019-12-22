<template>
	<v-layout>
		<v-row>
			<v-col>
				<v-card>
					<v-card-text>
						<v-row>
							<v-col>
								<div class="mb-2 headline">Background</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="background"
								></v-color-picker>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Overlay</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="overlay"
								></v-color-picker>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Target</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									:value="backgroundPlusOverlay"
								></v-color-picker>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-layout>
</template>

<script>
import { getEndColorWithOverlay } from '@/utils/color'
export default {
	data() {
		return {
			background: {
				r: 255,
				g: 255,
				b: 255,
				a: 1
			},
			overlay: {
				r: 255,
				g: 255,
				b: 255,
				a: 0.5
			},
			mode: 'hexa'
		}
	},
	computed: {
		backgroundPlusOverlay() {
			const x = getEndColorWithOverlay(
				this.background,
				this.overlay
			).toHex8String()

			console.log(x)
			return x
		}
	}
}
</script>
