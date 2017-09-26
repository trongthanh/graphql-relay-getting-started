/**
 * Step 4: Introduce custom (object) types
 * ! at field selector marks return data must exist and match the type
 */
// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
	type Song {
		id: ID!,
		artist: String!,
		title: String!,
		listens: Int,
		uploadedAt: String,
	}

	type Query {
		getSongs(limit: Int): [Song]
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		getSongs(root, { limit }) {
			if (limit != null) {
				return db.songs.slice(0, limit);
			} else {
				return db.songs;
			}
		}
	}
};

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export function context(headers, secrets) {
	return {
		headers,
		secrets,
	};
}

// in-memory database
const db = {
	songs: [{
		'id': 1,
		'title': 'Em Gái Mưa',
		'artist': 'Hương Tràm',
		'listens': 5483,
		'uploadedAt': '2017-09-18T03:57:10Z'
	}, {
		'id': 2,
		'title': 'Túy Âm',
		'artist': 'Xesi, Masew, Nhật Nguyễn',
		'listens': 5155,
		'uploadedAt': '2017-09-18T09:54:57Z'
	}, {
		'id': 3,
		'title': 'Chiều Hôm Ấy',
		'artist': 'Jaykii',
		'listens': 3189,
		'uploadedAt': '2017-05-31T09:52:43Z'
	}, {
		'id': 4,
		'title': 'Xin Đừng Lặng Im',
		'artist': 'Soobin Hoàng Sơn',
		'listens': 3058,
		'uploadedAt': '2017-08-14T01:40:40Z'
	}, {
		'id': 5,
		'title': 'Ngày Mai Em Đi (Touliver Mix)',
		'artist': 'Touliver, Lê Hiếu, Soobin Hoàng Sơn',
		'listens': 2969,
		'uploadedAt': '2017-06-29T05:14:14Z'
	}, {
		'id': 6,
		'title': 'Nói Thương Nhau Thì Đừng Làm Trái Tim Em Đau',
		'artist': 'Bích Phương',
		'listens': 2872,
		'uploadedAt': '2017-08-21T03:18:57Z'
	}, {
		'id': 7,
		'title': '1234',
		'artist': 'Chi Dân',
		'listens': 2532,
		'uploadedAt': '2017-06-05T08:12:14Z'
	}, {
		'id': 8,
		'title': 'Tớ Thích Cậu',
		'artist': 'Han Sara',
		'listens': 2303,
		'uploadedAt': '2017-08-10T06:46:02Z'
	}, {
		'id': 9,
		'title': 'Cớ Sao Giờ Lại Chia Xa',
		'artist': 'Bích Phương',
		'listens': 2278,
		'uploadedAt': '2017-08-19T04:20:33Z'
	}, {
		'id': 10,
		'title': 'Yêu Đi Đừng Sợ (OST Yêu Đi Đừng Sợ)',
		'artist': 'OnlyC',
		'listens': 2245,
		'uploadedAt': '2017-06-12T05:39:35Z'
	}, {
		'id': 11,
		'title': 'Cảm Nắng',
		'artist': 'Suni Hạ Linh, RTee',
		'listens': 2167,
		'uploadedAt': '2017-07-10T07:35:12Z'
	}, {
		'id': 12,
		'title': 'Chưa Bao Giờ Mẹ Kể (Ngày Thứ 8 Của Mẹ)',
		'artist': 'MIN, ERIK, Phạm Hoài Nam',
		'listens': 1937,
		'uploadedAt': '2017-07-17T03:04:28Z'
	}, {
		'id': 13,
		'title': 'Ghen',
		'artist': 'Khắc Hưng, ERIK, MIN',
		'listens': 1739,
		'uploadedAt': '2017-05-15T03:43:15Z'
	}, {
		'id': 14,
		'title': 'Anh Thế Giới Và Em',
		'artist': 'Hương Tràm',
		'listens': 1735,
		'uploadedAt': '2017-07-26T02:38:14Z'
	}, {
		'id': 15,
		'title': 'Có Em Chờ',
		'artist': 'Min, Mr.A',
		'listens': 1654,
		'uploadedAt': '2017-06-03T05:18:25Z'
	}, {
		'id': 16,
		'title': 'Lạc Trôi (Triple D Remix)',
		'artist': 'Sơn Tùng M-TP',
		'listens': 1474,
		'uploadedAt': '2017-06-03T02:04:26Z'
	}, {
		'id': 17,
		'title': 'Còn Gì Giữa Chúng Ta',
		'artist': 'Miu Lê',
		'listens': 1260,
		'uploadedAt': '2017-07-08T10:38:42Z'
	}, {
		'id': 18,
		'title': 'Hôn Anh',
		'artist': 'MIN',
		'listens': 1245,
		'uploadedAt': '2017-05-05T05:48:48Z'
	}, {
		'id': 19,
		'title': 'Không Thể Yêu Ai Được Nữa',
		'artist': 'Gin Tuấn Kiệt',
		'listens': 1178,
		'uploadedAt': '2017-07-01T12:25:47Z'
	}, {
		'id': 20,
		'title': 'Từ Ngày Em Đến',
		'artist': 'Da LAB',
		'listens': 1152,
		'uploadedAt': '2017-05-15T01:06:01Z'
	}, {
		'id': 21,
		'title': 'Điều Ngốc Nghếch Nhất',
		'artist': 'Hoàng Yến Chibi',
		'listens': 1134,
		'uploadedAt': '2017-08-02T05:23:23Z'
	}, {
		'id': 22,
		'title': 'Thương Em Hơn Chính Anh',
		'artist': 'Jun Phạm',
		'listens': 1096,
		'uploadedAt': '2017-05-23T02:03:18Z'
	}, {
		'id': 23,
		'title': 'Ta Cứ Đi Cùng Nhau',
		'artist': 'Đen, Linh Cáo',
		'listens': 1095,
		'uploadedAt': '2017-05-11T08:33:26Z'
	}, {
		'id': 24,
		'title': 'Ngồi Hát Đỡ Buồn (Cô Gái Đến Từ Hôm Qua OST)',
		'artist': 'Trúc Nhân',
		'listens': 988,
		'uploadedAt': '2017-08-07T11:46:02Z'
	}, {
		'id': 25,
		'title': 'Happy Ending',
		'artist': 'ERIK',
		'listens': 975,
		'uploadedAt': '2017-08-13T08:54:57Z'
	}, {
		'id': 26,
		'title': 'Có Điều Gì Sao Không Nói Cùng Anh',
		'artist': 'Trung Quân Idol',
		'listens': 959,
		'uploadedAt': '2017-05-13T07:12:11Z'
	}, {
		'id': 27,
		'title': 'L.O.V.E',
		'artist': 'Lou Hoàng',
		'listens': 910,
		'uploadedAt': '2017-09-20T05:58:59Z'
	}, {
		'id': 28,
		'title': 'Đưa Em Đi Khắp Thế Gian',
		'artist': 'Bích Phương',
		'listens': 906,
		'uploadedAt': '2017-05-29T09:07:57Z'
	}, {
		'id': 29,
		'title': 'Giấu Đằng Sau',
		'artist': 'Song Luân',
		'listens': 893,
		'uploadedAt': '2017-07-17T12:56:32Z'
	}, {
		'id': 30,
		'title': 'Remember Me (SlimV 2017 Mix)',
		'artist': 'Sơn Tùng M-TP, SlimV',
		'listens': 878,
		'uploadedAt': '2017-06-08T10:08:40Z'
	}, {
		'id': 31,
		'title': 'Như Cái Lò',
		'artist': 'Sambi, Mr.A',
		'listens': 838,
		'uploadedAt': '2017-05-17T11:47:48Z'
	}, {
		'id': 32,
		'title': 'Ta Đã Yêu Chưa Vậy',
		'artist': 'Isaac, BigDaddy',
		'listens': 743,
		'uploadedAt': '2017-07-07T01:48:09Z'
	}, {
		'id': 33,
		'title': 'Dù Chỉ Là Mộng Mơ',
		'artist': 'Rocker Nguyễn',
		'listens': 737,
		'uploadedAt': '2017-07-04T01:05:38Z'
	}, {
		'id': 34,
		'title': 'Cả Một Trời Thương Nhớ',
		'artist': 'Hồ Ngọc Hà',
		'listens': 697,
		'uploadedAt': '2017-06-15T01:19:02Z'
	}, {
		'id': 35,
		'title': 'Yêu Một Hoàng Tử',
		'artist': 'Hoàng Yến Chibi',
		'listens': 676,
		'uploadedAt': '2017-08-28T08:13:42Z'
	}, {
		'id': 36,
		'title': 'Có Được Không Em',
		'artist': 'Chi Dân',
		'listens': 600,
		'uploadedAt': '2017-05-28T08:16:43Z'
	}, {
		'id': 37,
		'title': 'Yêu Là Tha Thu (Em Chưa 18 OST)',
		'artist': 'OnlyC',
		'listens': 600,
		'uploadedAt': '2017-09-18T12:35:50Z'
	}, {
		'id': 38,
		'title': 'Yêu 5',
		'artist': 'Rhymastic',
		'listens': 589,
		'uploadedAt': '2017-09-09T03:31:08Z'
	}, {
		'id': 39,
		'title': 'Người Ta Và Anh',
		'artist': 'Lê Thiện Hiếu',
		'listens': 559,
		'uploadedAt': '2017-07-28T12:58:41Z'
	}, {
		'id': 40,
		'title': 'Nơi Ta Chờ Em (Em Chưa 18 OST)',
		'artist': 'Will',
		'listens': 552,
		'uploadedAt': '2017-06-05T09:32:45Z'
	}
]};
