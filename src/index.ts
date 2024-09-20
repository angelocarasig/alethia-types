export type Manga = {
	/**
	 * Refers to ID defined by source
	 */
	sourceId: string;

	/**
	 * String used as identifier when fetching from source
	 */
	slug: string;

	/**
	 * Title of manga
	 */
	title: string;

	/**
	 * Array of alternative titles for manga
	 */
	alternativeTitles: Array<string>;

	/**
	 * Author of manga
	 */
	author: string;

	/**
	 * Artist of manga
	 */
	artist: string;

	/**
	 * Synopsis of manga
	 */
	synopsis: string;

	/**
	 * Last time the source for this manga was updated. Defaults to Date.now
	 */
	updatedAt: string;

	/**
	 * Creation date of this manga
	 */
	createdAt: string;

	/**
	 * Current state of the manga
	 */
	contentStatus: ContentStatus;

	/**
	 * Maturity rating of the manga
	 */
	contentRating: ContentRating;

	/**
	 * URL to the manga
	 */
	url: string;

	/**
	 * Cover URL of the manga
	 */
	coverUrl: string;
};

/**
 * Type used to return a list of manga with minimal details
 */
export type CollectionManga = Pick<Manga, 'sourceId' | 'slug' | 'title' | 'coverUrl'>;

/**
 * Type that defines a whole manga and its chapters
 */
export type DisplayManga = Manga & {
	chapters: Array<Chapter>;
	tags: Array<string>;
};

export type Chapter = {
	mangaId: string;
	slug: string;
	chapterNumber: number;
	chapterTitle: string;

	/**
	 * Refers to scanlation group, source name if the source is a scanlation group, etc.
	 */
	author: string;

	// Date type serializes to string
	date: string;
};

export enum ContentStatus {
	Ongoing = 'Ongoing',
	Hiatus = 'Hiatus',
	Cancelled = 'Cancelled',
	Completed = 'Completed',
	Unknown = 'Unknown'
}

export enum ContentRating {
	Safe = 'Safe',
	Suggestive = 'Suggestive',
	Explicit = 'Explicit'
}