import React, {useEffect} from 'react';
import gsap from 'gsap-trial';
import '../../pages/realizacje/style.css';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

function DesktopGallery({gallery}) {
	useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".panel", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    let images = gsap.utils.toArray(".panel:not(:last-child)");

    images.forEach((image, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });

      tl.to(image, {
        height: 0,
      });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    let texts = gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
        },
      });

      tl.to(text, {
        duration: 0.33,
        opacity: 1,
        y: "50%",
      }).to(
        text,
        {
          duration: 0.33,
          opacity: 0,
          y: "0%",
        },
        0.66
      );
    });

		gsap.from('.black', {
			duration: 0.2,
			opacity: 0,
			autoAlpha: 0,
			ease: 'power1.easeOut',
			stagger: 1,
			scrollTrigger: {
				trigger: '.black',
				start: 'top 90%',
				end: 'bottom center',
			},
		});

		ScrollTrigger.create({
			trigger: 'section.black',
			scrub: true,
			pin: true,
			start: () => 'top top',
			end: () => '+=' + (images.length + 1) * window.innerHeight,
		});
	}, []);
	return (
		<>
			<section className="black">
				<div className="text-wrap">
					{gallery.map((item) => (
						<div className="panel-text">{item.title}</div>
					))}
				</div>
				<div className="p-wrap">
					{gallery.map((item, i) => (
						<div
							className="panel"
							style={{ backgroundImage: `url(${item.url})` }}
						></div>
					))}
				</div>
			</section>
		</>
	);
}

export default DesktopGallery;
