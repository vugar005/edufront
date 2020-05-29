import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getQuestions, postQuestions } from '../store/auth.actions';
import { AuthActions } from '../store/action-types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AUTH_SECURITY_QUESTIONS_CONSTANTS } from './auth-security-questions.constants';
import { SecurityQuestion } from './models/security-question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-security-questions',
  templateUrl: './auth-security-questions.component.html',
  styleUrls: ['./auth-security-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSecurityQuestionsComponent implements OnInit, OnDestroy {
  public constants = AUTH_SECURITY_QUESTIONS_CONSTANTS;
  public form: FormGroup;
  public isPasswordVisible: boolean;
  public loading: boolean;
  public questions: FormArray;
  private _onDestroy$ = new Subject<void>();
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._listenToQuestionsResponse()
    this._getQuestions();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }

  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this._setLoading(true);
    const questions: SecurityQuestion[] = this.form.value.questions;
    this._store.dispatch(postQuestions({payload:questions}));
  }

  public get questionsComponents() { return (<FormArray>this.form.get('questions') as any).controls; }

  private _initForm(res: string[]): void {
    this.form = new FormGroup({
      'questions': this._formBuilder.array([])
    });
    this._createQuestionsField(res);
    this._setLoading(false);
  }

  private _createQuestionsField(res: string[]):void {
    return res.forEach(question => this._createQuestionField(question));
  }

  private _createQuestionField(question: string):void  {
    this.questions = this.form.get('questions') as FormArray;
    this.questions.push(this._createItem(question));
  }

  private _createItem(question: string): FormGroup {
    return this._formBuilder.group({
      question: new FormControl(question, Validators.required),
      answer: new FormControl(null, Validators.required)
    });
  }

  private _getQuestions() {
      this._setLoading(true);
      this._store.dispatch(getQuestions());
  }

  private _listenToQuestionsResponse(): void {
    this._actions$.pipe(
      ofType(AuthActions.getQuestionsSuccess),
      takeUntil(this._onDestroy$),
    ).subscribe(res => {
       this._initForm(res.payload);
    });

    this._actions$.pipe(
      ofType(AuthActions.postQuestionsSuccess),
      takeUntil(this._onDestroy$),
    ).subscribe(res => {
      this._router.navigateByUrl('set-new-password');
      this._setLoading(false);
    });
    this._actions$.pipe(
      ofType(AuthActions.getQuestionsFailure),
      takeUntil(this._onDestroy$),
    ).subscribe(res => {
       this._setLoading(false);
    });

    this._actions$.pipe(
      ofType(AuthActions.postQuestionsFailure),
      takeUntil(this._onDestroy$),
    ).subscribe(res => {
        this._setLoading(false);
    });
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

}
