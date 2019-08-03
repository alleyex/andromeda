import { trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

export const authAnimation =
    trigger('routeAnimation', [
        transition('sign-in => sign-up', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    // transform: 'translateX(100%)'
                    left: 0
                })
            ]),
            query(':enter', [
                style({
                    opacity: 0,
                    // transform: 'translateX(-100%)'
                    left: '-100%'
                })
            ]),
            query(':leave', animateChild()),
            query(':enter', animateChild()),
            group([
                query(':leave', [
                    animate('3000ms ease-out', style({
                        opacity: 0,
                        //  transform: 'translateX(100%)'
                        left: '100%'
                    }))
                ]),
                query(':enter', [
                    animate('3000ms ease-out', style({
                        opacity: 1,
                        // transform: 'translateX(0)'
                        left: '0%'
                    }))
                ])
            ]),
        ]),
        transition('sign-up => sign-in', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    // transform: 'translateX(0)'
                    left: 0
                })
            ]),
            query(':enter', [
                style({
                    opacity: 0,
                    // transform: 'translateX(100%)'
                    left: '100%'
                })
            ]),
            query(':leave', animateChild()),
            query(':enter', animateChild()),
            group([
                query(':leave', [
                    animate('3000ms ease-out', style({
                        opacity: 0,
                        //  transform: 'translateX(-100%)'
                        left: '-100%'
                    }))
                ]),
                query(':enter', [
                    animate('3000ms ease-out', style({
                        opacity: 1,
                        // transform: 'translateX(0)'
                        left: '0%'
                    }))
                ])
            ]),
        ])
    ]);


