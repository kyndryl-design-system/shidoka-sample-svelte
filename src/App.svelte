<script>
  import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
  import '@kyndryl-design-system/shidoka-applications/components/global/header';
	import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
	import '@kyndryl-design-system/shidoka-applications/components/global/footer';
	import '@kyndryl-design-system/shidoka-charts/components/chart';

  import switcherIcon from '@kyndryl-design-system/shidoka-foundation/assets/svg/switcher.svg?raw';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
</script>

<kyn-ui-shell>
	<kyn-header divider="" apptitle="Shidoka Svelte">
		<kyn-header-panel slot="left" heading="Panel Heading">
			<span slot="button">
				{@html switcherIcon}
			</span>

			<kyn-header-panel-link href="javascript:void(0)">
				<UserAvatar size={24} />
				Link 1
			</kyn-header-panel-link>
			<kyn-header-panel-link href="javascript:void(0)">
				<UserAvatar size={24} />
				Link 2
			</kyn-header-panel-link>
			<kyn-header-panel-link href="javascript:void(0)">
				<UserAvatar size={24} />
				Link 3
			</kyn-header-panel-link>
		</kyn-header-panel>

		<kyn-header-nav>
			<kyn-header-link href="javascript:void(0)"> Link 1 </kyn-header-link>
			<kyn-header-link href="javascript:void(0)" isActive> Link 2 </kyn-header-link>
			<kyn-header-link href="javascript:void(0)">
				Link 3

				<kyn-header-link slot="links" href="javascript:void(0)"> Sub Link # 1 </kyn-header-link>
				<kyn-header-link slot="links" href="javascript:void(0)"> Sub Link 2 </kyn-header-link>
			</kyn-header-link>
		</kyn-header-nav>

		<kyn-header-flyouts>
			<kyn-header-flyout>
				<span slot="button">Sign in</span>

				<div>
					<kyn-header-link href="javascript:void(0)"> Login </kyn-header-link>
					<kyn-header-link href="javascript:void(0)"> Sign up </kyn-header-link>
				</div>
			</kyn-header-flyout>

			<kyn-header-flyout assistiveText="My Account" hideArrow>
				<kyn-header-avatar initials="KB" slot="button" />

				<kyn-header-link href="javascript:void(0)"> Logout </kyn-header-link>
			</kyn-header-flyout>
		</kyn-header-flyouts>
	</kyn-header>

	<kyn-local-nav>
		<kyn-local-nav-link href="javascript:void(0)" active="">
			<UserAvatar size={20} slot="icon" />
			Link 1
		</kyn-local-nav-link>

		<kyn-local-nav-link href="javascript:void(0)">
			<UserAvatar size={20} slot="icon" />
			Link 2

			<kyn-local-nav-link slot="links" href="javascript:void(0)"> L2 Link 1 </kyn-local-nav-link>
			<kyn-local-nav-link slot="links" href="javascript:void(0)"> L2 Link 2 </kyn-local-nav-link>
		</kyn-local-nav-link>

		<kyn-local-nav-link href="javascript:void(0)" expanded="">
			<UserAvatar size={20} slot="icon" />
			Link 3

			<kyn-local-nav-link slot="links" href="javascript:void(0)">
				L2 Link 1

				<kyn-local-nav-link slot="links" href="javascript:void(0)"> L3 Link 1 </kyn-local-nav-link>
				<kyn-local-nav-link slot="links" href="javascript:void(0)"> L3 Link 2 </kyn-local-nav-link>
			</kyn-local-nav-link>
		</kyn-local-nav-link>
	</kyn-local-nav>

	<main>

		<div class="kd-grid">
			<div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-12">
				<h1 class="kd-type--headline-03">Shidoka Svelte Sample App</h1>
			</div>

			<div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-8">
				<kd-chart
					type="bar"
					height="400"
					chartTitle="Bar Chart"
					description="Description"
					labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
					datasets={[
						{
							label: 'Dataset 1',
							data: [12, 19, 3, 5, 2, 3]
						},
						{
							label: 'Dataset 2',
							data: [8, 15, 7, 9, 6, 12]
						}
					]}
					options={{
						scales: {
							x: {
								title: {
									text: 'Color'
								}
							},
							y: {
								title: {
									text: 'Votes'
								}
							}
						}
					}}
				/>
			</div>

			<div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-4">
				<kd-chart
					type="doughnut"
					chartTitle="Doughnut Chart"
					description="Description"
					height="400"
					labels={['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purple']}
					datasets={[
						{
							label: 'Dataset 1',
							data: [12, 19, 3, 5, 2, 3]
						}
					]}
					options={{
						scales: {
							x: {
								title: {
									text: 'Color'
								}
							},
							y: {
								title: {
									text: 'Votes'
								}
							}
						}
					}}
				/>
			</div>
		</div>

	</main>

	<kyn-footer>
		<span slot="copyright"> Copyright &copy; 2023 Kyndryl Inc. All rights reserved. </span>
	</kyn-footer>
</kyn-ui-shell>
