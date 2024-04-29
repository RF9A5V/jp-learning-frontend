import { ReactNode } from "react"

export type Props = {
  children: ReactNode
}

export type Group = {
  id: Number,
  name: String
}

export type Kanji = {
  id: Number,
  character: String,
  readings_on: String,
  readings_kun: String,
  meanings: String,
  stroke_count: Number | null,
  jlpt_level: String | null,
  grade_level: Number | null,
  kanji_groupings: any[] | null,
  learning_progress: any
}