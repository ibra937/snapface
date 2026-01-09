export class FaceSnap {
    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdDate: Date,
        public snaps: number
    ) 
    {}

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }
}