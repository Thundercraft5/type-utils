/** 
 * The purpose of this type is to narrow literal arguments for generics. 
 */
export type Any = (Any | Any[])[] |
	bigint |
boolean |
number |
string |
symbol |
((...args: Any[]) => Any) |
(abstract new (...args: Any[]) => Any) |
{
	[key: string]: Any;
	[key: number]: Any;
	[key: symbol]: Any;
} |
null |
undefined;