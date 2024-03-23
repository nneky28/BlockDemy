"use client"
///Courses component

///Libraries -->
import styles from "./course.module.scss";
import { MouseEvent, useState, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';
import { companyName, courseCategories } from "@/config/utils";
import { courses } from "@/config/database";
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import book1 from "@/public/images/book1.png"
import SortIcon from '@mui/icons-material/Sort';

///Commencing the code 

/**
 * @title Course Component
 * @returns The Course component
 */
const Course = () => {
  const router = useRouter()
  const [categoryId, setCategoryId] = useState<number>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>(courseCategories[0])
  //console.log('Current page:', routerPath);

  //This function is trigerred when a user clicks on a course category
  const viewCategory = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, id: number): void => {
    e.preventDefault()

    setCategoryId(() => id)
  }

  ///This function is trigerred when a user selects a course category
  const selectCategory = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault()

    setSelectedCategory(() => e.target.value)
  }

  return (
    <div className={styles.main}>
        <span className={styles.span1}>{companyName} Courses</span>
        <div className={styles.category}>
            {courseCategories.map((category, id) => (
                <button key={id} onClick={(e) => viewCategory(e, id)}>
                  <span className={id === categoryId ? styles.activeCategory : ""}>{category}</span>
                </button>
            ))}
        </div>
        <div className={styles.sortCategory}>
          <SortIcon className={styles.icon} />
          <select value={selectedCategory} onChange={(e) => selectCategory(e)}>
              {courseCategories.map((category, id) => (
                  <option value={category} key={id}>{category}</option>
              ))}
          </select>
        </div>
        <div className={styles.courses}>
              {courses.map((course, id) => (
                <div className={styles.carousel} key={id}>
                  <div className={styles.imageDiv}>
                    <Image
                      className={styles.image} 
                      alt=""
                      src={course.image ? course.image : ""}
                    />
                  </div>
                  <div className={styles.brief}>
                    <span className={styles.title}>{course.title}</span>
                    <span className={styles.description}>{course.description}</span>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.keyword}>
                      <span>{course.keyword}</span>
                    </div>
                    <div className={styles.rate}>
                      <StarIcon className={styles.icon} />
                      <span className={styles.figure}>{course.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <Image 
          className={styles.book1}
          alt=""
          src={book1}
        />
    </div>
  );
};

export default Course;