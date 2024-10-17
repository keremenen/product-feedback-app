import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto pt-20">
			<div>
				<p>Headings</p>
				<p className="text-heading-1">Sed egestas ante et vulputate volutpat</p>
				<p className="text-heading-2">
					Vestibulum volutpat acus a ultrices sagittis
				</p>
				<p className="text-heading-3">
					Pellentesque a diam sit amet mi ullamcorper vehicula
				</p>
				<p className="text-heading-4">
					Ut scelerisque hendrerit tellus. Integer sagittis
				</p>
			</div>
			<div className="max-w-[540px]">
				<p>Body</p>
				<p className="text-body-1 text-tertiary-orange">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
					hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
					vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
					laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
					eu nibh. Nullam mollis.
				</p>
				<p className="text-body-2 text-primary-purple rounded-lg">
					Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
					luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
					commodo quis, gravida id, est. Sed lectus. Praesent elementum
					hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
					lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
					sapien ornare nisl. Phasellus pede arcu
				</p>
				<p className="text-body-3">
					Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
					luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
					commodo quis, gravida id, est. Sed lectus. Praesent elementum
					hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
					lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
					sapien ornare nisl. Phasellus pede arcu
				</p>
			</div>
			<p>buttons</p>
			<div className="flex justify-between rounded h-11 px-6 tracking-normal">
				<Button>Post Comment</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
				<Button>Button 4</Button>
			</div>
		</main>
	)
}
