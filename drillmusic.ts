//% color=#1e1e2f icon="\uf001" block="Drill Music"
namespace drillmusic {

    /**
     * Play a dark drill-style tone
     * @param freq frequency in Hz
     * @param beats length of note
     */
    //% block="play drill tone %freq Hz for %beats beats"
    //% freq.min=60 freq.max=1000
    //% beats.shadow=music_beats
    export function playDrillTone(freq: number, beats: number) {
        music.play(
            music.tonePlayable(freq, music.beat(beats)),
            music.PlaybackMode.UntilDone
        )
    }

    /**
     * 808 drop effect
     */
    //% block="play 808 drop"
    export function drop808() {
        music.play(music.tonePlayable(180, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(120, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}
