<template>
	<v-layout>
		<v-row>
			<v-col class="col-12">
				<v-card>
					<v-card-text>
						<v-row>
							<v-col>
								<div class="mb-2 headline">Background</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="background"
									width="400"
								></v-color-picker>
							</v-col>
							<v-col
								class="headline col-auto d-flex justify-enter align-center"
							>
								<div>+</div>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Overlay</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="overlay"
								></v-color-picker>
							</v-col>
							<v-col
								class="headline col-auto d-flex justify-enter align-center"
							>
								<div>=</div>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Result</div>
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
			<v-col class="col-12">
				<v-card>
					<v-card-text>
						<v-row>
							<v-col>
								<div class="mb-2 headline">Result</div>
								<!-- <v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									:value="backgroundPlusOverlay"
								></v-color-picker> -->
							</v-col>
							<v-col
								class="headline col-auto d-flex justify-enter align-center"
							>
								<div>-</div>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Background</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="background"
									width="400"
								></v-color-picker>
							</v-col>
							<v-col
								class="headline col-auto d-flex justify-enter align-center"
							>
								<div>=</div>
							</v-col>
							<v-col>
								<div class="mb-2 headline">Overlay</div>
								<v-color-picker
									:mode="mode"
									@update:mode="mode = $event"
									v-model="overlay"
								></v-color-picker>
							</v-col>
							<v-col
								class="headline col-auto d-flex justify-enter align-center"
							>
								<div>=</div>
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
				g: 0,
				b: 0,
				a: 1
			},
			overlay: {
				r: 0,
				g: 0,
				b: 0,
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

			return x
		}
	}
}
</script>
