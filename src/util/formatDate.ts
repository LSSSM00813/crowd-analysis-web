type SupportedDateFormat =
  | "YYYY-MM-DD"
  | "YYYY/MM/DD"
  | "YYYY/MM/DD(ddd)"
  | "YYYY/MM/DD(曜)"
  | "YYYY年M月D日"
  | "YYYY年M月D日(曜)"
  | "(元号)Y年M月D日"
  | "(元号)Y年M月D日(曜)"
  | "(GENGOU)Y.M.D"
  | "(GENGOU)Y.MM.DD"
  | "MM/DD"
  | "MM/DD(ddd)"
  | "MM/DD(曜)"
  | "M/D"
  | "M/D(ddd)"
  | "M/D(曜)"
  | "M月D日"
  | "M月D日(曜)"
  | "HH:mm:ss.SSS"
  | "HH:mm:ss"
  | "HH:mm"
  | "HH時mm分ss秒"
  | "HH時mm分"
  | "H時m分"
  | "HH時"
  | "H時"
  | "ISO8601"
  | "YYYY-MM-DDTHH:mm:ss.SSSZ"
  | "YYYY-MM-DD HH:mm:ss"
  | "YYYY/MM/DD HH:mm:ss"
  | "YYYY/MM/DD HH:mm"
  | "YYYY年MM月DD日HH時mm分ss秒"
  | "YYYY年M月D日H時m分"
  | "YYYY年M月D日H時"
  | "(元号)Y年M月D日H時m分"
  | "(元号)Y年M月D日H時"
  | "MM/DD HH:mm:ss"
  | "MM/DD HH:mm"
  | "MM月DD日HH時mm分ss秒"
  | "M月D日H時m分"
  | "M月D日H時"
  | "YYYY"
  | "MM"
  | "M"
  | "DD"
  | "D"
  | "HH"
  | "H"
  | "mm"
  | "m"
  | "ss"
  | "s";

/**
 * 日付を YYYY-MM-DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY-MM-DD 例: 2024-04-08
 * @returns {string} 例: 2024-04-08
 */
export function formatDate(date: Date, format: "YYYY-MM-DD"): string;

/**
 * 日付を YYYY/MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付  例: 2024/04/08
 * @param format YYYY/MM/DD
 * @returns {string} 例: 2024/04/08
 */
export function formatDate(date: Date, format: "YYYY/MM/DD"): string;

/**
 * 日付を YYYY/MM/DD(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY/MM/DD(ddd) 例: 2024/04/08(Mon)
 */
export function formatDate(date: Date, format: "YYYY/MM/DD(ddd)"): string;

/**
 * 日付を YYYY/MM/DD(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY/MM/DD(曜) 例: 2024/04/08(月)
 */
export function formatDate(date: Date, format: "YYYY/MM/DD(曜)"): string;

/**
 * 日付を YYYY年M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY年M月D日 例: 2024年4月8日
 */
export function formatDate(date: Date, format: "YYYY年M月D日"): string;

/**
 * 日付を YYYY年M月D日(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY年M月D日(曜) 例: 2024年4月8日(月)
 */
export function formatDate(date: Date, format: "YYYY年M月D日(曜)"): string;

/**
 * 日付を (元号)Y年M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (元号)Y年M月D日 例: 令和6年4月8日
 */
export function formatDate(date: Date, format: "(元号)Y年M月D日"): string;

/**
 * 日付を (元号)Y年M月D日(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (元号)Y年M月D日(曜) 例: 令和6年4月8日(月)
 */
export function formatDate(date: Date, format: "(元号)Y年M月D日(曜)"): string;

/**
 * 日付を (GENGOU)Y.M.D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (GENGOU)Y.M.D 例: R6.4.8
 */
export function formatDate(date: Date, format: "(GENGOU)Y.M.D"): string;

/**
 * 日付を (GENGOU)Y.MM.DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (GENGOU)Y.MM.DD 例: R06.04.08
 */
export function formatDate(date: Date, format: "(GENGOU)Y.MM.DD"): string;

/**
 * 日付を MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD 例: 04/08
 */
export function formatDate(date: Date, format: "MM/DD"): string;

/**
 * 日付を MM/DD(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD(ddd) 例: 04/08(Mon)
 */
export function formatDate(date: Date, format: "MM/DD(ddd)"): string;

/**
 * 日付を MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD(曜) 例: 04/08(月)
 */
export function formatDate(date: Date, format: "MM/DD(曜)"): string;

/**
 * 日付を M/D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D 例: 4/8
 */
export function formatDate(date: Date, format: "M/D"): string;

/**
 * 日付を M/D(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D(ddd) 例: 04/08(Mon)
 */
export function formatDate(date: Date, format: "M/D(ddd)"): string;

/**
 * 日付を M/D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D(曜) 例: 4/8(月)
 */
export function formatDate(date: Date, format: "M/D(曜)"): string;

/**
 * 日付を M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M月D日 例: 4月8日
 */
export function formatDate(date: Date, format: "M月D日"): string;

/**
 * 日付を M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M月D日(曜) 例: 4月8日(月)
 */
export function formatDate(date: Date, format: "M月D日(曜)"): string;

/**
 * 時刻を HH:mm:ss.SSS 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm:ss.SSS 例: 09:05:45.123
 */
export function formatDate(date: Date, format: "HH:mm:ss.SSS"): string;

/**
 * 時刻を HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm:ss 例: 09:05:45
 */
export function formatDate(date: Date, format: "HH:mm:ss"): string;

/**
 * 時刻を HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm 例: 09:05
 */
export function formatDate(date: Date, format: "HH:mm"): string;

/**
 * 時刻を HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時mm分ss秒 例: 09時05分05秒
 */
export function formatDate(date: Date, format: "HH時mm分ss秒"): string;

/**
 * 時刻を HH時mm分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時mm分 例: 09時05分
 */
export function formatDate(date: Date, format: "HH時mm分"): string;

/**
 * 時刻を H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format H時m分 例: 9時5分
 */
export function formatDate(date: Date, format: "H時m分"): string;

/**
 * 時刻を HH時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時 例: 09時
 */
export function formatDate(date: Date, format: "HH時"): string;

/**
 * 時刻を H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format H時 例: 9時
 */
export function formatDate(date: Date, format: "H時"): string;

/**
 * 日時を YYYY-MM-DDTHH:mm:ss.SSSZ 形式の文字列に変換します（ISO 8601）
 * @param date 変換対象の日時
 * @param format ISO8601 例: 2024-04-08T05:30:45.123Z
 */
export function formatDate(date: Date, format: "ISO8601"): string;

/**
 * 日時を YYYY-MM-DDTHH:mm:ss.SSSZ 形式の文字列に変換します（ISO 8601）
 * @param date 変換対象の日時
 * @param format YYYY-MM-DDTHH:mm:ss.SSSZ 例: 2024-04-08T05:30:45.123Z
 */
export function formatDate(
  date: Date,
  format: "YYYY-MM-DDTHH:mm:ss.SSSZ"
): string;

/**
 * 日時を YYYY-MM-DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY-MM-DD HH:mm:ss 例) 2024-04-08 09:05:45
 */
export function formatDate(date: Date, format: "YYYY-MM-DD HH:mm:ss"): string;

/**
 * 日時を YYYY/MM/DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY/MM/DD HH:mm:ss 例: 2024/04/08 09:05:45
 */
export function formatDate(date: Date, format: "YYYY/MM/DD HH:mm:ss"): string;

/**
 * 日時を YYYY/MM/DD HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY/MM/DD HH:mm 例: 2024/04/08 09:05
 */
export function formatDate(date: Date, format: "YYYY/MM/DD HH:mm"): string;

/**
 * 日時を YYYY年MM月DD日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年MM月DD日HH時mm分ss秒 例: 2024年04月08日09時09分08秒
 */
export function formatDate(
  date: Date,
  format: "YYYY年MM月DD日HH時mm分ss秒"
): string;

/**
 * 日時を YYYY年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時m分 例: 2024年4月8日14時30分
 */
export function formatDate(date: Date, format: "YYYY年M月D日H時m分"): string;

/**
 * 日時を YYYY年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時 例: 2024年4月8日14時
 */
export function formatDate(date: Date, format: "YYYY年M月D日H時"): string;

/**
 * 日時を YYYY年M月D日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日HH時mm分ss秒 例: 2024年4月8日09時05分05秒
 */
export function formatDate(
  date: Date,
  format: "YYYY年MM月DD日HH時mm分ss秒"
): string;

/**
 * 日時を YYYY年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時m分 例: 2024年4月8日9時5分
 */
export function formatDate(date: Date, format: "YYYY年M月D日H時m分"): string;

/**
 * 日時を YYYY年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時 例: 2024年4月8日9時
 */
export function formatDate(date: Date, format: "YYYY年M月D日H時"): string;

/**
 * 日時を (元号)Y年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format (元号)Y年M月D日H時m分 例: 令和6年4月8日9時30分
 */
export function formatDate(date: Date, format: "(元号)Y年M月D日H時m分"): string;

/**
 * 日時を (元号)Y年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format (元号)Y年M月D日H時 例: 令和6年4月8日9時
 */
export function formatDate(date: Date, format: "(元号)Y年M月D日H時"): string;

/**
 * 日時を MM/DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format MM/DD HH:mm:ss 例: 04/08 09:05:45
 */
export function formatDate(date: Date, format: "MM/DD HH:mm:ss"): string;

/**
 * 日時を MM/DD HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format MM/DD HH:mm 例: 04/08 09:05
 */
export function formatDate(date: Date, format: "MM/DD HH:mm"): string;

/**
 * 日時を M月D日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日HH時mm分ss秒 例: 4月8日09時05分05秒
 */
export function formatDate(date: Date, format: "MM月DD日HH時mm分ss秒"): string;

/**
 * 日時を M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日H時m分 例: 4月8日9時5分
 */
export function formatDate(date: Date, format: "M月D日H時m分"): string;

/**
 * 日時を M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日H時 例: 4月8日9時
 */
export function formatDate(date: Date, format: "M月D日H時"): string;

/**
 * 日時から特定の要素を抽出します
 * @param date 変換対象の日時
 * @param format
 * - 'YYYY': 年（4桁）
 * - 'MM': 月（2桁）
 * - 'M': 月
 * - 'DD': 日（2桁）
 * - 'D': 日
 * - 'HH': 時（2桁）
 * - 'H': 時
 * - 'mm': 分（2桁）
 * - 'm': 分
 * - 'ss': 秒（2桁）
 * - 's': 秒
 * @returns {string} 指定された要素の文字列
 */
export function formatDate(
  date: Date,
  format:
    | "YYYY"
    | "MM"
    | "M"
    | "DD"
    | "D"
    | "HH"
    | "H"
    | "mm"
    | "m"
    | "ss"
    | "s"
): string;

// 実装
export function formatDate(date: Date, format: SupportedDateFormat): string {
  switch (format) {
    case "YYYY-MM-DD":
      return date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

    case "YYYY/MM/DD":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

    case "YYYY/MM/DD(ddd)":
      return `${date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })}(${date.toLocaleDateString("en-US", { weekday: "short" })})`;

    case "YYYY/MM/DD(曜)":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
      });

    case "YYYY年M月D日":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    case "YYYY年M月D日(曜)":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
      });

    case "(元号)Y年M月D日":
      return date.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    case "(元号)Y年M月D日(曜)":
      return date.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
      });

    case "(GENGOU)Y.M.D":
      return date
        .toLocaleDateString("ja-JP-u-ca-japanese", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
        .replaceAll("/", ".");

    case "(GENGOU)Y.MM.DD":
      return date
        .toLocaleDateString("ja-JP-u-ca-japanese", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replaceAll("/", ".");

    case "MM/DD":
      return date.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
      });

    case "MM/DD(ddd)":
      return `${date.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
      })}(${date.toLocaleDateString("en-US", { weekday: "short" })})`;

    case "MM/DD(曜)":
      return date.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
      });

    case "M/D":
      return date.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
      });

    case "M/D(ddd)":
      return `${date.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
      })}(${date.toLocaleDateString("en-US", { weekday: "short" })})`;

    case "M/D(曜)":
      return date.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
        weekday: "short",
      });

    case "M月D日":
      return date.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric",
      });

    case "M月D日(曜)":
      return date.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric",
        weekday: "short",
      });

    case "HH:mm:ss.SSS":
      return `${date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}.${String(date.getMilliseconds()).padStart(3, "0")}`;

    case "HH:mm:ss":
      return date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

    case "HH:mm":
      return date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    case "HH時mm分ss秒":
      return `${String(date.getHours()).padStart(2, "0")}時${String(
        date.getMinutes()
      ).padStart(2, "0")}分${String(date.getSeconds()).padStart(2, "0")}秒`;

    case "HH時mm分":
      return `${String(date.getHours()).padStart(2, "0")}時${String(
        date.getMinutes()
      ).padStart(2, "0")}分`;

    case "H時m分":
      return `${date.getHours()}時${date.getMinutes()}分`;

    case "HH時":
      return `${String(date.getHours()).padStart(2, "0")}時`;

    case "H時":
      return `${date.getHours()}時`;

    case "ISO8601":
    case "YYYY-MM-DDTHH:mm:ss.SSSZ":
      return date.toISOString();

    case "YYYY-MM-DD HH:mm:ss":
      return `${date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })} ${date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}`;

    case "YYYY/MM/DD HH:mm:ss":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    case "YYYY/MM/DD HH:mm":
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

    case "YYYY年MM月DD日HH時mm分ss秒":
      return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}月${String(date.getDate()).padStart(2, "0")}日${String(
        date.getHours()
      ).padStart(2, "0")}時${String(date.getMinutes()).padStart(
        2,
        "0"
      )}分${String(date.getSeconds()).padStart(2, "0")}秒`;

    case "YYYY年M月D日H時m分":
      return `${date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}${date.getHours()}時${date.getMinutes()}分`;

    case "YYYY年M月D日H時":
      return `${date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}${date.getHours()}時`;

    case "(元号)Y年M月D日H時m分":
      return `${date.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}${date.getHours()}時${date.getMinutes()}分`;

    case "(元号)Y年M月D日H時":
      return `${date.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}${date.getHours()}時`;

    case "MM/DD HH:mm:ss":
      return date.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    case "MM/DD HH:mm":
      return date.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

    case "MM月DD日HH時mm分ss秒":
      return `${String(date.getMonth() + 1).padStart(2, "0")}月${String(
        date.getDate()
      ).padStart(2, "0")}日${String(date.getHours()).padStart(
        2,
        "0"
      )}時${String(date.getMinutes()).padStart(2, "0")}分${String(
        date.getSeconds()
      ).padStart(2, "0")}秒`;

    case "M月D日H時m分":
      return `${date.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric",
      })}${date.getHours()}時${date.getMinutes()}分`;

    case "M月D日H時":
      return `${date.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric",
      })}${date.getHours()}時`;

    case "YYYY":
      return String(date.getFullYear());

    case "MM":
      return String(date.getMonth() + 1).padStart(2, "0");

    case "M":
      return String(date.getMonth() + 1);

    case "DD":
      return String(date.getDate()).padStart(2, "0");

    case "D":
      return String(date.getDate());

    case "HH":
      return String(date.getHours()).padStart(2, "0");

    case "H":
      return String(date.getHours());

    case "mm":
      return String(date.getMinutes()).padStart(2, "0");

    case "m":
      return String(date.getMinutes());

    case "ss":
      return String(date.getSeconds()).padStart(2, "0");

    case "s":
      return String(date.getSeconds());

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
